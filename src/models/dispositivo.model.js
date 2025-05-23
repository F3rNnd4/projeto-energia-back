import prisma from "../../prisma/prisma.js";

class DispositivoModel {
  // Listar todos os dispositivos
  async getAll() {
    try {
      const dispositivos = await prisma.dispositivo.findMany({
        include: {
          comodo: {
            select: {
              id: true,
              nome: true,
            },
          },
        },
        orderBy: {
          id: "asc",
        },
      });
      return dispositivos;
    } catch (error) {
      console.error("Erro ao buscar dispositivos:", error);
      throw new Error("Erro ao buscar dispositivos.");
    }
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
    const { nome, potencia, tempoUso, voltagem, corrente, comodoId, marca, descricao } = data;

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
        marca: marca || null,         // novo campo
        descricao: descricao || null, // novo campo
      },
    });

    return novoDispositivo;
  } catch (error) {
    console.error("Erro ao criar dispositivo no modelo:", error);
    throw new Error("Erro ao criar dispositivo. Tente novamente mais tarde.");
  }
}

  // Atualizar um dispositivo existente
  async update(id, data) {
  const dispositivo = await this.getById(id);

  if (!dispositivo) {
    return {
      error: `Dispositivo com ID ${id} não encontrado.`,
    };
  }

  const { nome, potencia, tempoUso, voltagem, corrente, comodoId, marca, descricao } = data;

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

  const dispositivoAtualizado = await prisma.dispositivo.update({
    where: {
      id: Number(id),
    },
    data: {
      nome,
      potencia,
      tempoUso,
      voltagem,
      corrente,
      comodoId: Number(comodoId),
      marca: marca || null,         // novo campo
      descricao: descricao || null, // novo campo
    },
  });

  return dispositivoAtualizado;
}

  // Deletar um dispositivo
  async delete (id) {
    const dispositivo = await this.getById(id);

    // Verifica se o dispositivo existe
    if (!dispositivo) {
      return {
        error: `Dispositivo com ID ${id} não encontrado.`,
      };
    }

    // Deleta o dispositivo
    await prisma.dispositivo.delete({
      where: {
        id: Number(id)
      }
    });

    return {
      message: `Dispositivo com ID ${id} deletado com sucesso!`,
    };
  }
}

export default new DispositivoModel();
