import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { logger, prisma, schema } from '@/lib';

const server = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    req,
    res,
    services: { prisma },
    log: logger(),
  }),
});
