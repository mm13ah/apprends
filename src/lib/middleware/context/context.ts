import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import pino from 'pino';
import { prisma, logger } from '../../services';
import { Token, verifyAccessToken } from '../../crypto';

export interface ContextInput {
  req: NextRequest;
}

interface Services {
  prisma: PrismaClient;
}

export class Context {
  public token?: Token | null;

  public services: Services;

  public log: pino.Logger;

  constructor(variables: ContextInput) {
    this.services = {
      prisma,
    };
    this.log = logger().child({ token: this.token });
    if (variables.req.headers.authorization) {
      try {
        this.token = verifyAccessToken(variables.req.headers.authorization);
      } catch {
        this.token = null;
      }
    }
  }
}
