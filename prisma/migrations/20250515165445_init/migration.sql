-- CreateTable
CREATE TABLE "Comodo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Dispositivo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "potencia" REAL NOT NULL,
    "tempoUso" REAL NOT NULL,
    "voltagem" REAL NOT NULL,
    "corrente" REAL NOT NULL,
    "comodoId" INTEGER NOT NULL,
    CONSTRAINT "Dispositivo_comodoId_fkey" FOREIGN KEY ("comodoId") REFERENCES "Comodo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
