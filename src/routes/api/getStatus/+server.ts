import { json } from "@sveltejs/kit";
import type { RequestHandler } from './$types';
import { getLamp, prisma } from "$lib/server/db/prisma";
import { DateTime } from "luxon";
import { setState } from "$lib/server/db/lamp";

export const GET: RequestHandler = async () => {

    const currentTime = DateTime.now().toFormat( "HH:mm" );
    const nextAlarm = await prisma.alarm.findFirst( {
        orderBy: [
            {
                time: 'asc'
            }
        ],
        where: {
            time: {
                gte: currentTime
            },
            enabled: true
        }
    } )
    if ( nextAlarm == null ) {
        return json( {
            message: "no next alarm"
        } )
    }

    const lamp = await getLamp();
    if (lamp == null) {
        throw new Error("No Lamp record");
    }

    if (currentTime == nextAlarm.time) {
        await setState(true);
    }


    const timeUntil = DateTime.fromISO( nextAlarm.time ).diffNow()
    return json( {
        nextAlarm: nextAlarm?.time,
        nextAlarmIn: timeUntil.milliseconds,
        isOn: (await getLamp())?.isOn,
    } );
}