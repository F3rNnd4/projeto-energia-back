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

  // Buscar dispositivo pelo seu ID
  async getById(req, res) {
    try {
      const { id } = req.params;

      const dispositivo = await DispositivoModel.getById(id);

      if (!dispositivo) {
        return res
          .status(404)
          .json({ error: `🔴 Dispositivo com ID ${id} não encontrado.` });
      }

      res
        .status(200)
        .json({ message: `🟢 Dispositovo com ID ${id} encontrado:`, dispositivo });
    } catch (error) {
      console.error("Erro ao buscar dispositivo:", error);
      res.status(500).json({ error: "Erro ao buscar dispositivo!" });
    }
  }
}

export default new DispositivoController();
