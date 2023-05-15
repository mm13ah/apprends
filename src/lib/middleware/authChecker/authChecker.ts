import { AuthChecker } from 'type-graphql';
import { Context } from '../context';

export const authChecker: AuthChecker<Context> = async ({ context }) => {
  context.log.info(`Checking token`);
  return !!context.token?.sub;
};
