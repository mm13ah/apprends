import {
  checkPassword,
  createAccessToken,
  createRefreshToken,
} from '@/lib/crypto';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '@generated/type-graphql';
import { Context } from '@/lib/middleware';
import { Auth, LoginInput } from './auth.type';

@Resolver(() => User)
export class AuthResolver {
  @Mutation(() => Auth)
  async login(
    @Ctx() context: Context,
    @Arg('loginData') loginData: LoginInput
  ) {
    try {
      const user = await context.services.prisma.user.findUnique({
        where: {
          email: loginData.email.toLocaleLowerCase(),
        },
      });
      if (!user) {
        throw new Error('Invalid email or password');
      }
      const validpass = checkPassword(
        loginData.password,
        user?.hashed_password ?? ''
      );
      if (validpass) {
        return {
          access_token: createAccessToken(user.id),
          refresh_token: createRefreshToken(user.id),
        };
      }
      return {};
    } catch (e) {
      context.log.error(e);
      throw new Error('Invalid email or password');
    }
  }
}
