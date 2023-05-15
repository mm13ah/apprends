import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcrypt';
import { faker } from '@faker-js/faker';

const saltRounds = 10;

export function hashPassword(password: string): string {
  const salt = bcryptjs.genSaltSync(saltRounds);
  return bcryptjs.hashSync(password, salt);
}

const prisma = new PrismaClient();
async function main() {
  await Promise.all(
    Array(10)
      .fill(0)
      .map(async () => {
        const firstname = faker.name.firstName();
        const lastname = faker.name.lastName();
        const email = faker.internet
          .email(firstname, lastname, 'example.com')
          .toLocaleLowerCase();

        return prisma.user.create({
          data: {
            firstname,
            lastname,
            email,
            hashed_password: hashPassword('Password123!'),
          },
        });
      })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
