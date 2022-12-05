/*
  Warnings:

  - You are about to alter the column `IdTipoDespesa` on the `Despesas` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `TiposDespesas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `idTipo` on the `TiposDespesas` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Despesas" (
    "idDespesa" TEXT NOT NULL PRIMARY KEY,
    "idFat" TEXT NOT NULL,
    "IdDespesaOwner" TEXT NOT NULL,
    "IdTipoDespesa" INTEGER NOT NULL,
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
INSERT INTO "new_Despesas" ("IdDespesaOwner", "IdTipoDespesa", "comentario", "createdAt", "dataDespesa", "dateApproved", "idDespesa", "idFat", "idMoeda", "idStatus", "imageNF", "localDespesa", "updatedAt", "valor") SELECT "IdDespesaOwner", "IdTipoDespesa", "comentario", "createdAt", "dataDespesa", "dateApproved", "idDespesa", "idFat", "idMoeda", "idStatus", "imageNF", "localDespesa", "updatedAt", "valor" FROM "Despesas";
DROP TABLE "Despesas";
ALTER TABLE "new_Despesas" RENAME TO "Despesas";
CREATE TABLE "new_TiposDespesas" (
    "idTipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricaoTipo" TEXT NOT NULL
);
INSERT INTO "new_TiposDespesas" ("descricaoTipo", "idTipo") SELECT "descricaoTipo", "idTipo" FROM "TiposDespesas";
DROP TABLE "TiposDespesas";
ALTER TABLE "new_TiposDespesas" RENAME TO "TiposDespesas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
