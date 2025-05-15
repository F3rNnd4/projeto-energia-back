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

  // Criar um novo dispositivo
  async create(data) {
    try {
      const { nome, potencia, tempoUso, voltagem, corrente, comodoId } = data;
  
      const camposFaltando = [];
      if (!nome) camposFaltando.push("nome");
      if (!potencia) camposFaltando.push("potencia");
      if (!tempoUso) camposFaltando.push("tempoUso");
      if (!voltagem) camposFaltando.push("voltagem");
      if (!corrente) camposFaltando.push("corrente");
      if (!comodoId) camposFaltando.push("comodoId");
  
      if (camposFaltando.length > 0) {
        return {
          error: "Os seguintes campos são obrigatórios:",
          camposFaltando,
        };
      }
  
      const novoDispositivo = await prisma.dispositivo.create({
        data: {
          nome,
          potencia,
          tempoUso,
          voltagem,
          corrente,
          comodoId: Number(comodoId),
        },
      });
  
      return novoDispositivo;
    } catch (error) {
      console.error("Erro ao criar dispositivo no modelo:", error); // Log detalhado
      throw new Error("Erro ao criar dispositivo. Tente novamente mais tarde.");
    }
  }
}

export default new DispositivoModel();
