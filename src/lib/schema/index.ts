import { buildSchemaSync } from 'type-graphql';
import { authChecker } from '../middleware';
import { AuthResolver } from './auth/auth.resolver';
import { UserResolver } from './user/user.resolver';

export const schema = buildSchemaSync({
  resolvers: [AuthResolver, UserResolver],
  authChecker,
  authMode: 'null',
  validate: false,
});
