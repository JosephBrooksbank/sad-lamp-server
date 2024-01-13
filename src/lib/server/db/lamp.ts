import { prisma } from "$lib/server/db/prisma";
import { DateTime } from "luxon";

export const setState = async (isOn: boolean) => {
        return prisma.lamp.update( {
            where: {
                id: 1
            },
            data: {
                isOn: isOn,
                turnedOn: isOn ? DateTime.now().toString() : null
            }
        } );
}