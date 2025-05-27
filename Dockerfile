# Usar uma imagem oficial do Node.js
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instalar dependências (incluindo prisma)
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Gerar o cliente Prisma (se necessário)
RUN npx prisma generate

# Expor a porta que seu backend usa (ajuste conforme seu app)
EXPOSE 3000

# Comando para rodar sua aplicação
CMD ["npm", "start"]
