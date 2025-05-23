import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seed...");

  // Clear existing data
  console.log("Limpando dados existentes...");
  await prisma.dispositivo.deleteMany({});
  await prisma.comodo.deleteMany({});

  // Criar Cômodos
  const sala = await prisma.comodo.create({
    data: {
      nome: "Sala",
    },
  });

  const cozinha = await prisma.comodo.create({
    data: {
      nome: "Cozinha",
    },
  });

  const banheiro = await prisma.comodo.create({
    data: {
      nome: "Banheiro",
    },
  });

  const quarto = await prisma.comodo.create({
    data: {
      nome: "Quarto",
    },
  });

  console.log("Cômodos criados...");

  // Criar Dispositivos
  const lampada = await prisma.dispositivo.create({
    data: {
      nome: "Lâmpada",
      potencia: 60,
      tempoUso: 5,
      voltagem: 110,
      corrente: 0.55,
      comodoId: sala.id,
      marca: "Philips",
      descricao: "Lâmpada LED 9W",
    },
  });

  const arCondicionado = await prisma.dispositivo.create({
    data: {
      nome: "Ar Condicionado",
      potencia: 2000,
      tempoUso: 8,
      voltagem: 220,
      corrente: 9.1,
      comodoId: sala.id,
      marca: "LG",
      descricao: "Split 9000 BTUs",
    },
  });

  const tv = await prisma.dispositivo.create({
    data: {
      nome: "TV",
      potencia: 100,
      tempoUso: 4,
      voltagem: 110,
      corrente: 0.91,
      comodoId: sala.id,
      marca: "Samsung",
      descricao: "Smart TV 42 polegadas",
    },
  });

  const homeTheater = await prisma.dispositivo.create({
    data: {
      nome: "Home Theater",
      potencia: 250,
      tempoUso: 3,
      voltagem: 110,
      corrente: 2.27,
      comodoId: sala.id,
    },
  });

  const roteador = await prisma.dispositivo.create({
    data: {
      nome: "Roteador Wi-fi",
      potencia: 20,
      tempoUso: 24,
      voltagem: 110,
      corrente: 0.09,
      comodoId: sala.id,
    },
  });

  const abajur = await prisma.dispositivo.create({
    data: {
      nome: "Abajur",
      potencia: 40,
      tempoUso: 6,
      voltagem: 110,
      corrente: 0.36,
      comodoId: sala.id,
    },
  });

  const geladeira = await prisma.dispositivo.create({
    data: {
      nome: "Geladeira",
      potencia: 150,
      tempoUso: 24,
      voltagem: 220,
      corrente: 0.68,
      comodoId: cozinha.id,
      marca: "Electrolux",
      descricao: "Duplex Frost Free",
    },
  });

  const microondas = await prisma.dispositivo.create({
    data: {
      nome: "Microondas",
      potencia: 1200,
      tempoUso: 1,
      voltagem: 220,
      corrente: 5.45,
      comodoId: cozinha.id,
      marca: "Brastemp",
      descricao: "Microondas 20L branco",
    },
  });

  const airfryer = await prisma.dispositivo.create({
    data: {
      nome: "Air Fryer",
      potencia: 1500,
      tempoUso: 2,
      voltagem: 220,
      corrente: 6.82,
      comodoId: cozinha.id,
    },
  });

  const cafeteira = await prisma.dispositivo.create({
    data: {
      nome: "Cafeteira",
      potencia: 600,
      tempoUso: 1,
      voltagem: 110,
      corrente: 5.45,
      comodoId: cozinha.id,
    },
  });

  const liquidificador = await prisma.dispositivo.create({
    data: {
      nome: "Liquidificador",
      potencia: 500,
      tempoUso: 0.5,
      voltagem: 110,
      corrente: 4.55,
      comodoId: cozinha.id,
    },
  });

  const exaustor = await prisma.dispositivo.create({
    data: {
      nome: "Exaustor",
      potencia: 100,
      tempoUso: 2,
      voltagem: 220,
      corrente: 0.45,
      comodoId: cozinha.id,
    },
  });

  const chuveiro = await prisma.dispositivo.create({
    data: {
      nome: "Chuveiro",
      potencia: 5500,
      tempoUso: 1,
      voltagem: 220,
      corrente: 25.0,
      comodoId: banheiro.id,
      marca: "Lorenzetti",
      descricao: "Chuveiro elétrico",
    },
  });

  const secador = await prisma.dispositivo.create({
    data: {
      nome: "Secador",
      potencia: 2000,
      tempoUso: 1,
      voltagem: 220,
      corrente: 9.1,
      comodoId: banheiro.id,
    },
  });

  const babyliss = await prisma.dispositivo.create({
    data: {
      nome: "Babyliss",
      potencia: 1000,
      tempoUso: 1,
      voltagem: 110,
      corrente: 9.09,
      comodoId: banheiro.id,
    },
  });

  const barbeador = await prisma.dispositivo.create({
    data: {
      nome: "Máquina de Barbear Elétrica",
      potencia: 15,
      tempoUso: 0.2,
      voltagem: 110,
      corrente: 0.14,
      comodoId: banheiro.id,
    },
  });

  const luminariaEspelho = await prisma.dispositivo.create({
    data: {
      nome: "Luminária de Espelho",
      potencia: 25,
      tempoUso: 1,
      voltagem: 110,
      corrente: 0.23,
      comodoId: banheiro.id,
    },
  });

  const ventilador = await prisma.dispositivo.create({
    data: {
      nome: "Ventilador",
      potencia: 80,
      tempoUso: 6,
      voltagem: 110,
      corrente: 0.73,
      comodoId: quarto.id,
      marca: "Mondial",
      descricao: "Ventilador de mesa",
    },
  });

  const computador = await prisma.dispositivo.create({
    data: {
      nome: "Computador",
      potencia: 300,
      tempoUso: 8,
      voltagem: 110,
      corrente: 2.73,
      comodoId: quarto.id,
    },
  });

  const aquecedor = await prisma.dispositivo.create({
    data: {
      nome: "Aquecedor",
      potencia: 1500,
      tempoUso: 2,
      voltagem: 220,
      corrente: 6.82,
      comodoId: quarto.id,
    },
  });

  const carregadorCelular = await prisma.dispositivo.create({
    data: {
      nome: "Carregador de Celular",
      potencia: 5,
      tempoUso: 2,
      voltagem: 110,
      corrente: 0.045,
      comodoId: quarto.id,
    },
  });

  const umidificador = await prisma.dispositivo.create({
    data: {
      nome: "Umidificador",
      potencia: 30,
      tempoUso: 8,
      voltagem: 110,
      corrente: 0.45,
      comodoId: quarto.id,
    },
  });

  const led = await prisma.dispositivo.create({
    data: {
      nome: "Lâmpada LED",
      potencia: 10,
      tempoUso: 5,
      voltagem: 110,
      corrente: 0.09,
      comodoId: quarto.id,
    },
  });

  console.log("Dispositivos criados...");

  console.log(
    `Seed concluído com sucesso! Cômodos: ${await prisma.comodo.count()} e Dispositivos: ${await prisma.dispositivo.count()}`
  );
}

main()
  .catch((e) => {
    console.error("Erro durante o seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });