# Creation of a fullstack app that generates 2 schema prisms whose models are generated from 2 separate existing db's.

- 1 Create Prisma Schema:<br />
  npx prisma init --datasource-provider postgresql

- 2 Generate/Rigenerate prisma client updating:<br />
  npx prisma generate --schema prisma/schema1.prisma<br />
  npx prisma generate --schema prisma/schema2.prisma<br />
  npx prisma generate --schema prisma/schema3.prisma

- 3 Import tables from db generating respectives models:<br />
  npx prisma db pull

---

Attaccare un db secondario a un progetto in prisma

1. Crea schema nuovo con nome diverso
   a. Cambia l’URL del db con tutte le info del db nuovo
   b. aggiungi una cartella Output del nuovo schema es.
   i. output = "./generated/clientComune"
2. fai il pull del DB specifico necessario
   a. npx prisma db pull --schema ./prisma/schemaComune.prisma
3. Fail il generate del prisma client
   a. npx prisma generate --schema ./prisma/schemaComune.prisma
4. Testa facendo il migrate di uno specifico Schema
   a. npx prisma migrate dev --name testCampoDaEliminare --schema=./prisma/schema.prisma
5. Rifai normalmente il generate
6.

- Crea un nuovo file schemaNomeComune nella directory ./prisma
- Aggiungi al file .env la variabile DATABASE_URL_COMUNE con "nome utente" = "johndoe", "password"="pass", "host"="192.160.1.1", "schema"="public"
- Aggiungi al nuovo file schema il path del client "../src/generated/client"
- Fai il pull del DB con url=DATABASE_URL_COMUNE
- Esegui comando "npx prisma db pull --schema ./prisma/schemaNomeComune.prisma"
- Esegui il comando "npx prisma generate --schema ./prisma/schemaNomeComune.prisma"
