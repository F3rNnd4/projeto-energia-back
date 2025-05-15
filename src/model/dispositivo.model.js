import prisma from "../../prisma/prisma.js";

class DispositivoModel {
  async getAll() {
    const dispositivos = await prisma.dispositivo.findMany({
      orderBy: {
        id: "asc",
      },
      include: {
        comodo: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
    });

    console.log("Dispositivos encontrados:", dispositivos);

    return dispositivos;
  }

}

export default new DispositivoModel();