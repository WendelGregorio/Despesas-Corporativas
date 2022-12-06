/*
  Warnings:

  - You are about to drop the column `resgistro` on the `colaboradores` table. All the data in the column will be lost.
  - Added the required column `registro` to the `colaboradores` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_colaboradores" (
    "idColaborador" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "registro" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0.00,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "idTipo" INTEGER NOT NULL
);
INSERT INTO "new_colaboradores" ("createdAt", "idColaborador", "idTipo", "nome", "saldo", "senha", "updatedAt") SELECT "createdAt", "idColaborador", "idTipo", "nome", "saldo", "senha", "updatedAt" FROM "colaboradores";
DROP TABLE "colaboradores";
ALTER TABLE "new_colaboradores" RENAME TO "colaboradores";
CREATE UNIQUE INDEX "colaboradores_registro_key" ON "colaboradores"("registro");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
