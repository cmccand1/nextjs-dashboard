import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const basePrisma = new PrismaClient({
  log: ['query'],
  accelerateUrl: process.env.PRISMA_DATABASE_URL,
});

// Extend with accelerate but cast to PrismaClient for type compatibility
export const prisma =
  (basePrisma.$extends(withAccelerate()) as unknown as PrismaClient) ||
  (globalForPrisma.prisma = basePrisma.$extends(
    withAccelerate()
  ) as unknown as PrismaClient);

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
