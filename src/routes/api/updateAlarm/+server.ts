import {json} from "@sveltejs/kit";
import type { RequestHandler } from './$types';
import type {Alarm} from "@prisma/client";
import {prisma} from "$lib/server/db/prisma";

export const POST: RequestHandler = async ({ request}) => {
    const alarm: Alarm = await request.json();

    await prisma.alarm.update({
        where: {
            id: alarm.id
        },
        data: {
            time: alarm.time,
            enabled: alarm.enabled,
        },
    });

    return json(alarm);

}