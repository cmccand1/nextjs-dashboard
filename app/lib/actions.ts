'use server';

import { z } from 'zod';
import { prisma } from '@/app/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  await prisma.invoice.create({
    data: {
      customer_id: customerId,
      amount: amountInCents,
      status: status,
      date: new Date(date),
    },
  });

  // Since we just updated the DB, we'll need to refetch the latest data
  // since the route is cached by Next
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;

  await prisma.invoice.update({
    data: {
      customer_id: customerId,
      amount: amountInCents,
      status: status,
    },
    where: {
      id: id,
    },
  });

  // Since we just updated the DB, we'll need to refetch the latest data
  // since the route is cached by Next
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  await prisma.invoice.delete({
    where: {
      id: id,
    },
  });
  revalidatePath('/dashboard/invoices');
}
