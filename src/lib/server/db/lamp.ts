import { prisma } from "$lib/server/db/prisma";

export const setState = async (isOn: boolean) => {
    return prisma.lamp.update({
        where: {
            id: 1
        },
        data: {
            isOn: isOn
        }
    });
}