import express from "express";
import DispositivoController from "../controllers/dispositivo.controller.js";

const router = express.Router();

router.get("/", DispositivoController.getAll);

export default router;