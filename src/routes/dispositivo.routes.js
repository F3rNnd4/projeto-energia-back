import express from "express";
import DispositivoController from "../controllers/dispositivo.controller.js";

const router = express.Router();

router.get("/", DispositivoController.getAll);
router.get("/:id", DispositivoController.getById);
router.post("/", DispositivoController.create);
router.put("/:id", DispositivoController.update);
router.delete("/:id", DispositivoController.delete);

export default router;