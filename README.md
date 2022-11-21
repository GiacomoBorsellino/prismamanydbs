# Creation of a fullstack app that generates 2 schema prisms whose models are generated from 2 separate existing db's.

- 1 Create Prisma Schema: 
npx prisma init --datasource-provider postgresql

- 2 Generate/Rigenerate prisma client updating:
npx prisma generate --schema prisma/schema1.prisma
npx prisma generate --schema prisma/schema2.prisma
npx prisma generate --schema prisma/schema3.prisma

- 3 Import tables from db generating respectives models
npx prisma db pull
