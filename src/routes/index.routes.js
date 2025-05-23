import express from "express";

import dispositivoRoutes from "./dispositivo.routes.js";
import comodoRoutes from "./comodo.routes.js";

const routes = express.Router();

// Exemplo de rota
routes.get("/test", (req, res) => {
  res.send("🚀 Rota de teste funcionando!");
});

// Rotas - Dispositivos 
routes.use("/dispositivos", dispositivoRoutes);

// Rotas - Comodos
routes.use("/comodos", comodoRoutes);


export default routes;