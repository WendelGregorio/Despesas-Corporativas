-- CreateTable
CREATE TABLE "colaboradores" (
    "idColaborador" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "resgistro" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "saldo" REAL NOT NULL DEFAULT 0.00,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "idTipo" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TiposDespesas" (
    "idTipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricaoTipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Despesas" (
    "idDespesa" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "IdDespesaOwner" INTEGER NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "colaboradores_resgistro_key" ON "colaboradores"("resgistro");
