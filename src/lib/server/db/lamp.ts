import { prisma } from "$lib/server/db/prisma";

export const setState = async (isOn: boolean) => {
    return await prisma.lamp.update( {
        where: {
            id: 1
        },
        data: {
            isOn: isOn
        }
    } );
}