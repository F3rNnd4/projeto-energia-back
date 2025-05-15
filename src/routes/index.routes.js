import express from "express";

const routes = express.Router();

// Exemplo de rota
routes.get("/example", (req, res) => {
  res.send("🚀 Rota de exemplo funcionando!");
});

export default routes;