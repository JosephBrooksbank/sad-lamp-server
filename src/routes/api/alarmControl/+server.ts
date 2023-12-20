import { prisma } from "$lib/server/db/prisma";
import { json } from "@sveltejs/kit";

export const POST = async (requestEvent) => {

        const data = await requestEvent.request.json()
        const isOn = data.isOn


        const lamp = await prisma.lamp.update({
            where: {
                id: 1
            },
            data: {
                isOn: isOn?.toString() === "true"
            }
        })

        return json(lamp.isOn);
}