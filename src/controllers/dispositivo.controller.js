import DispositivoModel from "../model/dispositivo.model.js";

class DispositivoController {
  async getAll(req, res) {
    try {
      const dispositivos = await DispositivoModel.getAll();
      res.status(200).json(dispositivos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao listar dispositivos." });
    }
  }

}

export default new DispositivoController();