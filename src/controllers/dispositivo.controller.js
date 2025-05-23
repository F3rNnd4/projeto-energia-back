import DispositivoModel from "../models/dispositivo.model.js";

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
        .json({
          message: `🟢 Dispositovo com ID ${id} encontrado:`,
          dispositivo,
        });
    } catch (error) {
      console.error("Erro ao buscar dispositivo:", error);
      res.status(500).json({ error: "Erro ao buscar dispositivo!" });
    }
  }

  // Criar um novo dispositivo
  async create(req, res) {
    try {
      const data = req.body;

      const resultado = await DispositivoModel.create(data);

      if (resultado.error) {
        return res.status(400).json(resultado);
      }

      res
        .status(201)
        .json({ message: "Dispositivo criado com sucesso!", dispositivo: resultado });
    } catch (error) {
      console.error("Erro ao criar dispositivo no controller:", error);
      res.status(500).json({
        error: "Erro ao criar dispositivo. Tente novamente mais tarde.",
      });
    }
  }

  // Atualizar um dispositivo existente
  async update(req, res) {
  try {
    const { id } = req.params;
    const {
      nome,
      potencia,
      tempoUso,
      voltagem,
      corrente,
      comodoId,
      marca,        // novo campo
      descricao     // novo campo
    } = req.body;

    // Atualiza o dispositivo
    const dispositivoAtualizado = await DispositivoModel.update(
      id,
      { nome, potencia, tempoUso, voltagem, corrente, comodoId, marca, descricao }
    );

    if (!dispositivoAtualizado) {
      return res
        .status(404)
        .json({ error: `🔴 Dispositivo com ID ${id} não encontrado.` });
    }

    res.status(200).json({
      message: `🟢 Dispositivo com ID ${id} atualizado com sucesso!`,
      dispositivo: dispositivoAtualizado,
    });
  } catch (error) {
    console.error("Erro ao atualizar dispositivo:", error);
    res.status(500).json({
      error: "Erro ao atualizar dispositivo. Tente novamente mais tarde.",
    });
  }
}

  // Deletar um dispositivo
  async delete(req, res){
    try {
      const { id } = req.params;

      const resultado = await DispositivoModel.delete(id);

      if (!resultado) {
        return res
          .status(404)
          .json({ error: `🔴 Dispositivo com ID ${id} não encontrado.` });
      }

      res.status(200).json({
        message: `🟢 Dispositivo com ID ${id} deletado com sucesso!`,
      });
    } catch (error) {
      console.error("Erro ao deletar dispositivo:", error);
      res.status(500).json({
        error: "Erro ao deletar dispositivo. Tente novamente mais tarde.",
      });
    }
  }
}

export default new DispositivoController();
