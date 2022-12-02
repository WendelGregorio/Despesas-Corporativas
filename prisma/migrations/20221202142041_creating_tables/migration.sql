-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Despesas" (
    "idDespesa" TEXT NOT NULL PRIMARY KEY,
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
