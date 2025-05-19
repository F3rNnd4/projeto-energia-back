# 💡 Projeto do Dia da Energia - API Back-end

Este é o back-end de uma aplicação desenvolvida para controle de geração e consumo de energia. A API permite o cadastro e gerenciamento de cômodos e dos dispositivos presentes neles, com o objetivo de organizar dados que futuramente poderão ser utilizados para monitoramento de consumo energético.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **SQLite** (banco de dados leve e local)
- **Prisma ORM**
- **Nodemon** (para ambiente de desenvolvimento)
- **Dotenv** (gerenciamento de variáveis de ambiente)

## 📦 Funcionalidades

Atualmente, a API permite:

- ✅ CRUD de **Cômodos**
- ✅ CRUD de **Dispositivos** associados a cada cômodo

## 📁 Estrutura do Projeto

```plaintext
projeto-energia-back/
    ├── node_modules/
    ├──prisma/
    ├──src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── server.js
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md
```

- **controllers/**: Contém a lógica de controle das rotas.
- **models/**: Define os modelos de dados (Cômodos e Dispositivos).
- **routes/**: Define as rotas da API.
- **server.js**: Inicialização do servidor.

## 🛠️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/F3rNnd4/projeto-energia-back.git
cd projeto-energia-back
```
### 2. Instale as dependências

```bash
npm install
```
### 3. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

```bash
PORT=4000

DATABASE_URL="file:./projeto-energia-back.db"
```

### 4. Inicie o banco de dados

```bash
npx prisma migrate dev
```

### 5. Execute o projeto

```bash
npm run dev
```
A aplicação será iniciada em http://localhost:4000.

## 📮 Rotas principais
### /comodos

- GET - Lista todos os cômodos
- POST - Cria um novo cômodo
- PUT - Atualiza um cômodo
- DELETE - Remove um cômodo

### /dispositivos

- GET - Lista todos os dispositivos
- POST - Cadastra um dispositivo em um cômodo
- PUT - Atualiza um dispositivo
- DELETE - Remove um dispositivo
