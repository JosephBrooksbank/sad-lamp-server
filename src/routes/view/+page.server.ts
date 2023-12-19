import { prisma } from "$lib/server/db/prisma";

export const load = async () => {
    return {
        alarms: await prisma.alarm.findMany(
            {
                orderBy: [
                    {
                        time: 'asc'
                    }
                ]
            }
        )
    }

}