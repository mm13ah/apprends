import { Resolver, Query, Ctx, Authorized } from 'type-graphql';
import { Context } from '../../middleware';
import { User } from '@generated/type-graphql';

@Resolver(() => User)
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  me(@Ctx() context: Context) {
    if (!context.token?.sub) {
      return null;
    }
    return context.services.prisma.user.findUnique({
      where: { id: context.token.sub },
    });
  }
}
