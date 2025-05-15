import prisma from "../../prisma/prisma.js";

class DispositivoModel {

  // Listar todos os dispositivos
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

  // Buscar dispositivo pelo seu ID
  async getById(id) {
    const dispositivo = await prisma.dispositivo.findUnique({
      where: {
        id: Number(id), // Certifique-se de que o ID é um número
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

    console.log("Dispositivo encontrado:", dispositivo);

    return dispositivo;
  }
}

export default new DispositivoModel();
