import express from "express";

import dispositivoRoutes from "./dispositivo.routes.js";

const routes = express.Router();

// Exemplo de rota
routes.get("/test", (req, res) => {
  res.send("🚀 Rota de teste funcionando!");
});

// Rotas - Dispositivos 
routes.use("/dispositivos", dispositivoRoutes);

export default routes;