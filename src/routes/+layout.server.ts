import { getLamp } from "$lib/server/db/prisma";
import type {LayoutServerLoad} from "./$types";


export const load: LayoutServerLoad = async () => {
    const lamp = await getLamp();
    return {
        isOn: lamp?.isOn
    }
}