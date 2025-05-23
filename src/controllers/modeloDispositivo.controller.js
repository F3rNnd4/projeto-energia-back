import ModeloDispositivoModel from "../models/modeloDispositivo.model.js";

class ModeloDispositivoController {
  async getAll(req, res) {
    try {
      const dispositivos = await ModeloDispositivoModel.getAll();
      res.status(200).json(dispositivos);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar modelos do banco." });
    }
  }
}

export default new ModeloDispositivoController();