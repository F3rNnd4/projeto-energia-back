import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Iniciando o seed...");

    // Criar Cômodos

    console.log("Cômodos criados...")

    // Criar Dispositivos

    console.log("Dispositivos criados...")

    console.log(
        `Seed concluído com sucesso! Cômodos: ${await prisma.comodo.count()} e Dispositivo: ${await prisma.dispositivo.count()}`
    )
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });