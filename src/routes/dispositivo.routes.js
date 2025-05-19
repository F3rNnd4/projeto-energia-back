import express from "express";
import DispositivoController from "../controllers/dispositivo.controller.js";

const router = express.Router();

// Rota para listar todos os dispositivos
router.get("/", DispositivoController.getAll);

// Rota para buscar um dispositivo pelo ID
router.get("/:id", DispositivoController.getById);

// Rota para criar um novo dispositivo
router.post("/", DispositivoController.create);

// Rota para atualizar um dispositivo pelo ID
router.put("/:id", DispositivoController.update);

// Rota para deletar um dispositivo pelo ID (se necessário)
router.delete("/:id", DispositivoController.delete);

export default router;