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
            nome: "Sala"
        }
    });

    const cozinha = await prisma.comodo.create({
        data: {
            nome: "Cozinha"
        }
    });

    const banheiro = await prisma.comodo.create({
        data: {
            nome: "Banheiro"
        }
    });

    const quarto = await prisma.comodo.create({
        data: {
            nome: "Quarto"
        }
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
            comodoId: sala.id
        }
    });

    const arCondicionado = await prisma.dispositivo.create({
        data: {
            nome: "Ar Condicionado",
            potencia: 2000,
            tempoUso: 8,
            voltagem: 220,
            corrente: 9.1,
            comodoId: sala.id
        }
    });

    const geladeira = await prisma.dispositivo.create({
        data: {
            nome: "Geladeira",
            potencia: 150,
            tempoUso: 24,
            voltagem: 220,
            corrente: 0.68,
            comodoId: cozinha.id
        }
    });

    const chuveiro = await prisma.dispositivo.create({
        data: {
            nome: "Chuveiro",
            potencia: 5500,
            tempoUso: 1,
            voltagem: 220,
            corrente: 25.0, 
            comodoId: banheiro.id
        }
    });

    const ventilador = await prisma.dispositivo.create({
        data: {
            nome: "Ventilador",
            potencia: 80,
            tempoUso: 6,
            voltagem: 110,
            corrente: 0.73,
            comodoId: quarto.id
        }
    });

    const tv = await prisma.dispositivo.create({
        data: {
            nome: "TV",
            potencia: 100,
            tempoUso: 4,
            voltagem: 110,
            corrente: 0.91,
            comodoId: sala.id
        }
    });

    const microondas = await prisma.dispositivo.create({
        data: {
            nome: "Microondas",
            potencia: 1200,
            tempoUso: 1,
            voltagem: 220,
            corrente: 5.45,
            comodoId: cozinha.id
        }
    });

    const computador = await prisma.dispositivo.create({
        data: {
            nome: "Computador",
            potencia: 300,
            tempoUso: 8,
            voltagem: 110,
            corrente: 2.73,
            comodoId: quarto.id
        }
    });

    const secador = await prisma.dispositivo.create({
        data: {
            nome: "Secador",
            potencia: 2000,
            tempoUso: 1,
            voltagem: 220,
            corrente: 9.1,
            comodoId: banheiro.id
        }
    });

    const airfryer = await prisma.dispositivo.create({
        data: {
            nome: "Air Fryer",
            potencia: 1500,
            tempoUso: 2,
            voltagem: 220,
            corrente: 6.82,
            comodoId: cozinha.id
        }
    });

    const babyliss = await prisma.dispositivo.create({
        data: {
            nome: "Babyliss",
            potencia: 1000,
            tempoUso: 1,
            voltagem: 110,
            corrente: 9.09,
            comodoId: banheiro.id
        }
    });

    const aquecedor = await prisma.dispositivo.create({
        data: {
            nome: "Aquecedor",
            potencia: 1500,
            tempoUso: 2,
            voltagem: 220,
            corrente: 6.82,
            comodoId: quarto.id
        }
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