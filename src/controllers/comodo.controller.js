import ComodoModel from '../model/comodo.model.js';

class ComodoController {
  // Listar todos os cômodos
  async findAll(req, res) {
    try {
      const result = await ComodoModel.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar cômodos",
        error: error.message
      });
    }
  }

  // Buscar um cômodo pelo ID
  async findById(req, res) {
    try {
      const { id } = req.params;
      
      if (!id) {
        return res.status(400).json({
          message: "ID não fornecido"
        });
      }

      const comodo = await ComodoModel.findById(id);
      
      if (!comodo) {
        return res.status(404).json({
          message: `Cômodo com ID ${id} não encontrado`
        });
      }

      return res.status(200).json(comodo);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar cômodo",
        error: error.message
      });
    }
  }

  // Criar um novo cômodo
  async create(req, res) {
    try {
      const { nome } = req.body;
      
      if (!nome) {
        return res.status(400).json({
          message: "Nome do cômodo é obrigatório"
        });
      }

      const novoComodo = await ComodoModel.create(nome);
      
      return res.status(201).json({
        message: "Cômodo criado com sucesso",
        comodo: novoComodo
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao criar cômodo",
        error: error.message
      });
    }
  }
}

export default new ComodoController();