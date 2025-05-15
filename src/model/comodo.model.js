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
                dispositivos: true,
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

}

export default new ComodoModel;
