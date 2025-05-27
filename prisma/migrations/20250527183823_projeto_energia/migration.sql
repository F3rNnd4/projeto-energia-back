-- CreateTable
CREATE TABLE "comodos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "comodos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dispositivos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "potencia" DOUBLE PRECISION NOT NULL,
    "tempoUso" DOUBLE PRECISION NOT NULL,
    "voltagem" DOUBLE PRECISION NOT NULL,
    "corrente" DOUBLE PRECISION NOT NULL,
    "comodoId" INTEGER NOT NULL,
    "marca" TEXT,
    "descricao" TEXT,

    CONSTRAINT "dispositivos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "dispositivos" ADD CONSTRAINT "dispositivos_comodoId_fkey" FOREIGN KEY ("comodoId") REFERENCES "comodos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
