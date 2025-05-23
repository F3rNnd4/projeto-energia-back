import { Router } from "express";

const router = Router();

const modelos = [
  { nome: "Lâmpada", potencia: 60, voltagem: 110, corrente: 0.55 },
  { nome: "Ar Condicionado", potencia: 2000, voltagem: 220, corrente: 9.1 },
  { nome: "Geladeira", potencia: 150, voltagem: 220, corrente: 0.68 },
  { nome: "Chuveiro", potencia: 5500, voltagem: 220, corrente: 25.0 },
  { nome: "Ventilador", potencia: 80, voltagem: 110, corrente: 0.73 },
  { nome: "TV", potencia: 100, voltagem: 110, corrente: 0.91 },
  { nome: "Microondas", potencia: 1200, voltagem: 220, corrente: 5.45 },
];

router.get("/", (req, res) => {
  res.json(modelos);
});

export default router;