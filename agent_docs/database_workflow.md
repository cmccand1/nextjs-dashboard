# Database Workflow

- Prisma schema is located in `/prisma/schema.prisma`
- `pnpm prisma generate`: Regenerate Prisma Client after schema changes.
- `pnpm prisma db push`: Push schema changes to the database.
- `.env`: Must contain `DATABASE_URL` and `PRISMA_DATABASE_URL`.
