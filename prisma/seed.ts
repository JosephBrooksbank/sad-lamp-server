import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
    const lamp = await prisma.lamp.upsert({
        where: {id: 1},
        update: {},
        create: {
            isOn: false
        }
    });
    console.log(lamp);
}

main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1);
})