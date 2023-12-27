import {json} from "@sveltejs/kit";
import type { RequestHandler } from './$types';
import {prisma} from "$lib/server/db/prisma";

export const POST: RequestHandler = async ({request}) => {
        const body = await request.json();

        const removed = await prisma.alarm.delete({
            where: {
                id: body.id
            }
        });

        return json(removed);
}