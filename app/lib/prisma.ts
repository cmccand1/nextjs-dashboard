import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const makeClient = () => {
  return new PrismaClient({
    log: ['query'],
    // @ts-ignore
    accelerateUrl: process.env.PRISMA_DATABASE_URL,
  }).$extends(withAccelerate());
};

// Use ReturnType<typeof makeClient> to preserve the full, extended type information
// of the Prisma Client (including models) when using extensions like Accelerate.
// This prevents type loss that occurs when casting to a generic 'PrismaClient'.
const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof makeClient> | undefined;
};

export const prisma = globalForPrisma.prisma || makeClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
