/*
  Warnings:

  - You are about to drop the `Comodo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dispositivo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Comodo";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Dispositivo";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "comodos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "dispositivos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "potencia" REAL NOT NULL,
    "tempoUso" REAL NOT NULL,
    "voltagem" REAL NOT NULL,
    "corrente" REAL NOT NULL,
    "comodoId" INTEGER NOT NULL,
    CONSTRAINT "dispositivos_comodoId_fkey" FOREIGN KEY ("comodoId") REFERENCES "comodos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
