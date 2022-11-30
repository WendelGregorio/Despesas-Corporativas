-- CreateTable
CREATE TABLE "colaboradores" (
    "idColaborador" TEXT NOT NULL PRIMARY KEY,
    "idFat" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0.00,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "idTipo" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TiposDespesas" (
    "idTipo" TEXT NOT NULL PRIMARY KEY,
    "descricaoTipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Despesas" (
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
    "dateApproved" DATETIME NOT NULL,
    CONSTRAINT "Despesas_IdTipoDespesa_fkey" FOREIGN KEY ("IdTipoDespesa") REFERENCES "TiposDespesas" ("idTipo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Despesas_IdDespesaOwner_fkey" FOREIGN KEY ("IdDespesaOwner") REFERENCES "colaboradores" ("idColaborador") ON DELETE RESTRICT ON UPDATE CASCADE
);
