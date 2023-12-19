import type { Actions} from "./$types";
import { prisma } from "$lib/server/db/prisma";
import { fail } from "@sveltejs/kit";

export const actions  = {
    addAlarm: async ({request}) => {
        const data = await request.formData();
        const time = data.get("time");

        if (!time) {
            return fail(400, {time, missing: true});
        }

        await prisma.alarm.create({
            data: {
                time: time.toString()
            }
        });

        return {status: "success"}
    }
} satisfies Actions