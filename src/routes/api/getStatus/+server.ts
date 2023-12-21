import {json} from "@sveltejs/kit";
import type {RequestHandler} from './$types';
import {getLamp, prisma} from "$lib/server/db/prisma";
import {DateTime} from "luxon";
import {setState} from "$lib/server/db/lamp";

export const GET: RequestHandler = async () => {

    const currentTime = DateTime.now().toFormat("HH:mm");
    const nextAlarm = await prisma.alarm.findFirst({
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
    })

    let lamp = await getLamp();
    if (lamp == null) {
        throw new Error("No Lamp record");
    }
    if (nextAlarm == null) {
        return json({
            nextAlarm: "no more alarms today",
            isOn: lamp.isOn
        })
    }

    const lastDayRan = DateTime.fromISO(nextAlarm.lastRun);

    if (currentTime == nextAlarm.time && !DateTime.now().hasSame(lastDayRan, "day")) {
        lamp = await setState(true);
        prisma.alarm.update({
            where: {
                id: nextAlarm.id
            },
            data: {
                lastRun: DateTime.now().toString()
            }
        })
    }
    const timeUntil = DateTime.fromISO(nextAlarm.time).diffNow()

    return json({
        nextAlarm: nextAlarm.time,
        nextAlarmIn: timeUntil.milliseconds,
        isOn: lamp.isOn,
    });
}