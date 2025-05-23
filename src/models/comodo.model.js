import prisma from "../../prisma/prisma.js";

class ComodoModel {
  // Método para obter todos os cômodos
  async findAll() {
  const comodos = await prisma.comodo.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      dispositivos: {
        select: {
          nome: true,
          potencia: true,
          tempoUso: true,
          voltagem: true,
          corrente: true,
          marca: true,      // novo campo
          descricao: true,  // novo campo
        },
      },
    },
  });

  const totalComodos = comodos.length;

  return {
    comodos,
    totalComodos,
  };
}

  // Método para obter um cômodo específico pelo ID
  async findById(id) {
  const comodo = await prisma.comodo.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      dispositivos: {
        select: {
          nome: true,
          potencia: true,
          tempoUso: true,
          voltagem: true,
          corrente: true,
          marca: true,      // novo campo
          descricao: true,  // novo campo
        },
      },
    },
  });

  return comodo;
}

  // Método para criar um novo cômodo
  async create(nome) {
    const novoComodo = await prisma.comodo.create({
      data: {
        nome,
      },
    });

    return novoComodo;
  }

  // Método para atualizar um cômodo pelo seu ID
  async update(id, nome) {
    const comodo = await this.findById(id);

    if (!comodo) {
      return null;
    }

    const comodoAtualizado = await prisma.comodo.update({
      where: {
        id: Number(id),
      },
      data: {
        nome,
      },
    });

    return comodoAtualizado;
  }

  // Deletar um cômodo pelo ID
  async delete(id) {
    if (isNaN(id)) {
      throw new Error("ID inválido. Deve ser um número.");
    }
  
    const comodo = await this.findById(id);
  
    if (!comodo) {
      return null; // Retorna null se o cômodo não for encontrado
    }
  
    try {
      // Verifica se há dispositivos relacionados ao cômodo
      const dispositivosRelacionados = await prisma.dispositivo.findMany({
        where: {
          comodoId: Number(id),
        },
      });
  
      if (dispositivosRelacionados.length > 0) {
        const nomesDispositivos = dispositivosRelacionados.map((d) => d.nome).join(", ");
        throw new Error(
          `Não é possível deletar o cômodo com ID ${id} porque ele está relacionado aos seguintes dispositivos: ${nomesDispositivos}.`
        );
      }
  
      // Deleta o cômodo
      await prisma.comodo.delete({
        where: {
          id: Number(id),
        },
      });
  
      return comodo; // Retorna o cômodo deletado
    } catch (error) {
      // Repassa o erro para o controller
      throw error;
    }
  }
}

export default new ComodoModel();
