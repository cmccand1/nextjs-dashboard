import { prisma } from '@/app/lib/prisma';

async function listInvoices() {
  return await prisma.invoice.findMany({
    select: {
      amount: true,
      customer: {
        select: {
          name: true,
        },
      },
    },
    where: {
      amount: 666,
    },
  });
}

export async function GET() {
  try {
    return Response.json(await listInvoices());
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
