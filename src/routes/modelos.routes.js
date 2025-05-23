import { Router } from "express";
import ModeloDispositivoController from "../controllers/modeloDispositivo.controller.js";

const router = Router();

router.get("/", (req, res) => ModeloDispositivoController.getAll(req, res));

export default router;