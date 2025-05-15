import ComodoModel from "../model/comodo.model.js";

class ComodoController {
  // Listar todos os cômodos
  async findAll(req, res) {
    try {
      const result = await ComodoModel.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar cômodos",
        error: error.message,
      });
    }
  }

  // Buscar um cômodo pelo ID
  async findById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          message: "ID não fornecido",
        });
      }

      const comodo = await ComodoModel.findById(id);

      if (!comodo) {
        return res.status(404).json({
          message: `Cômodo com ID ${id} não encontrado`,
        });
      }

      return res.status(200).json(comodo);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar cômodo",
        error: error.message,
      });
    }
  }

  // Criar um novo cômodo
  async create(req, res) {
    try {
      const { nome } = req.body;

      if (!nome) {
        return res.status(400).json({
          message: "Nome do cômodo é obrigatório",
        });
      }

      const novoComodo = await ComodoModel.create(nome);

      return res.status(201).json({
        message: "Cômodo criado com sucesso",
        comodo: novoComodo,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao criar cômodo",
        error: error.message,
      });
    }
  }

  // Atualizar um cômodo pelo ID
  async update(req, res) {
    try {
      const { id } = req.params; // Obtém o ID do cômodo a ser atualizado
      const { nome } = req.body; // Obtém o novo nome do cômodo

      // Valida se o ID foi fornecido
      if (!id) {
        return res.status(400).json({
          message: "ID do cômodo é obrigatório",
        });
      }

      // Valida se o nome foi fornecido
      if (!nome) {
        return res.status(400).json({
          message: "Nome do cômodo é obrigatório",
        });
      }

      // Chama o método do modelo para atualizar o cômodo
      const comodoAtualizado = await ComodoModel.update(id, nome);

      // Verifica se o cômodo foi encontrado
      if (!comodoAtualizado) {
        return res.status(404).json({
          message: `Cômodo com ID ${id} não encontrado`,
        });
      }

      // Retorna o cômodo atualizado
      return res.status(200).json({
        message: "Cômodo atualizado com sucesso",
        comodo: comodoAtualizado,
      });
    } catch (error) {
      // Trata erros inesperados
      return res.status(500).json({
        message: "Erro ao atualizar cômodo",
        error: error.message,
      });
    }
  }

  // Deletar um cômodo pelo ID
  async delete(req, res) {
    try {
      const { id } = req.params;
  
      if (!id || isNaN(id)) {
        return res.status(400).json({
          message: "ID inválido. Deve ser um número.",
        });
      }
  
      const comodoDeletado = await ComodoModel.delete(id);
  
      if (!comodoDeletado) {
        return res.status(404).json({
          message: `Cômodo com ID ${id} não encontrado.`,
        });
      }
  
      return res.status(200).json({
        message: "Cômodo deletado com sucesso.",
        comodo: comodoDeletado,
      });
    } catch (error) {
      // Verifica se o erro é de dispositivos relacionados
      if (error.message.includes("relacionado aos seguintes dispositivos")) {
        return res.status(400).json({
          message: error.message,
        });
      }
  
      // Trata outros erros inesperados
      return res.status(500).json({
        message: "Erro ao deletar cômodo.",
        error: error.message,
      });
    }
  }
}

export default new ComodoController();
