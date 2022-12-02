/*
  Warnings:

  - You are about to drop the column `idFat` on the `colaboradores` table. All the data in the column will be lost.
  - The required column `idFat` was added to the `Despesas` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Despesas" (
    "idDespesa" TEXT NOT NULL PRIMARY KEY,
    "idFat" TEXT NOT NULL,
    "IdDespesaOwner" TEXT NOT NULL,
    "IdTipoDespesa" TEXT NOT NULL,
    "idMoeda" INTEGER NOT NULL,
    "valor" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "dataDespesa" DATETIME NOT NULL,
    "localDespesa" TEXT NOT NULL,
    "comentario" TEXT,
    "imageNF" TEXT,
    "idStatus" INTEGER NOT NULL,
    "dateApproved" DATETIME,
    CONSTRAINT "Despesas_IdTipoDespesa_fkey" FOREIGN KEY ("IdTipoDespesa") REFERENCES "TiposDespesas" ("idTipo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Despesas_IdDespesaOwner_fkey" FOREIGN KEY ("IdDespesaOwner") REFERENCES "colaboradores" ("idColaborador") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Despesas" ("IdDespesaOwner", "IdTipoDespesa", "comentario", "createdAt", "dataDespesa", "dateApproved", "idDespesa", "idMoeda", "idStatus", "imageNF", "localDespesa", "updatedAt", "valor") SELECT "IdDespesaOwner", "IdTipoDespesa", "comentario", "createdAt", "dataDespesa", "dateApproved", "idDespesa", "idMoeda", "idStatus", "imageNF", "localDespesa", "updatedAt", "valor" FROM "Despesas";
DROP TABLE "Despesas";
ALTER TABLE "new_Despesas" RENAME TO "Despesas";
CREATE TABLE "new_colaboradores" (
    "idColaborador" TEXT NOT NULL PRIMARY KEY,
    "saldo" REAL NOT NULL DEFAULT 0.00,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "idTipo" INTEGER NOT NULL
);
INSERT INTO "new_colaboradores" ("createdAt", "idColaborador", "idTipo", "saldo", "updatedAt") SELECT "createdAt", "idColaborador", "idTipo", "saldo", "updatedAt" FROM "colaboradores";
DROP TABLE "colaboradores";
ALTER TABLE "new_colaboradores" RENAME TO "colaboradores";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
