import {PrismaClient} from '@prisma/client';

export const prisma = new PrismaClient()

export const getLamp = async () => await prisma.lamp.findFirst()