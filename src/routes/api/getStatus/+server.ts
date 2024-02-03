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

    if (lamp.isOn && DateTime.fromISO(lamp.turnedOn!.toISOString()).diffNow("minutes").negate().minutes > 60) {
        lamp = await setState(false);
    }

    if (nextAlarm == null) {
        return json({
            nextAlarm: "no more alarms today",
            isOn: lamp.isOn
        })
    }
    const lastDayRan = nextAlarm.lastRun ? DateTime.fromISO(nextAlarm.lastRun) : DateTime.fromMillis(0);

    if (currentTime == nextAlarm.time && !DateTime.now().hasSame(lastDayRan, "day")) {
        lamp = await setState(true);
        await prisma.alarm.update({
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