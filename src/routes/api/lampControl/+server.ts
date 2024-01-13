import { json } from "@sveltejs/kit";
import { setState } from "$lib/server/db/lamp";

export const POST = async (requestEvent) => {

        const data = await requestEvent.request.json()
        const isOn = data.isOn

        const lamp = await setState(isOn?.toString() === "true");

        return json(lamp.isOn);
}