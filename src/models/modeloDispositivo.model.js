import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class ModeloDispositivoModel {
  async getAll() {
    return prisma.dispositivo.findMany({
      include: {
        comodo: true,
      },
    });
  }
}

export default new ModeloDispositivoModel();