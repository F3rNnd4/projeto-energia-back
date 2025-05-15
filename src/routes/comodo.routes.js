import express from "express";
import ComodoController from "../controllers/comodo.controller.js";

const router = express.Router();

// Rota para listar todos os cômodos
router.get("/", ComodoController.findAll);

// Rota para buscar um cômodo pelo ID
router.get("/:id", ComodoController.findById);

// Rota para criar um novo cômodo
router.post("/", ComodoController.create);

// Rota para atualizar um cômodo pelo ID
router.put("/:id", ComodoController.update);

// Rota para deletar um cômodo pelo ID (se necessário)
router.delete("/:id", ComodoController.delete);

export default router;