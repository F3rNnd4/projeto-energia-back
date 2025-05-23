import express from "express";
import { config } from "dotenv";
import cors from "cors";

import routes from "./routes/index.routes.js";
import modelosRoutes from "./routes/modelos.routes.js"; // <-- Adicione esta linha

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 4001; // Define a porta do servidor

// Inicializa o Express
const app = express();
app.use(cors()); // Habilita CORS para todas as rotas

app.use(express.json()); // Parse de JSON

// Middleware para logar as requisições
app.use((req, res, next) => {
  console.log(`📥 [${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Rota de boas-vindas
app.get("/", (req, res) => {
  res.send("🚀 Bem-vindo ao servidor! Tudo está funcionando perfeitamente.");
});

app.use("/", routes);
app.use("/api/modelos", modelosRoutes);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error("❌ Erro no servidor:", err.message);
  res.status(500).json({ error: "Ocorreu um erro no servidor. Tente novamente mais tarde." });
});

// Captura o evento de encerramento do servidor
process.on("SIGINT", () => {
  console.log("\n🔴 Servidor encerrado. Até logo! 🔴");
  process.exit();
});

// Exibir o ambiente do servidor
console.log(`🌍 Ambiente: ${process.env.NODE_ENV || "desenvolvimento"}`);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`🟢 Servidor rodando na porta http://localhost:${port} 🟢`);
});