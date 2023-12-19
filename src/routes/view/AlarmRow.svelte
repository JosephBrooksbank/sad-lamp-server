<script lang="ts">
    import type {Alarm} from "@prisma/client";

    export let alarm: Alarm

    let handleCheckboxChanged = async () => {
        const response = await fetch('/api/updateAlarm', {
            method: 'POST',
            body: JSON.stringify(alarm),
            headers: {
                'content-type': 'application/json',
            },
        });

        await response.json()
    }
</script>

<div class="card w-11/12 bg-base-100 shadow-xl">
    <div class="card-body flex flex-row flex justify-between">
        <div>
            {alarm.time}
        </div>
        <div>
            <input bind:checked={alarm.enabled} type="checkbox" class="toggle toggle-primary" on:change={handleCheckboxChanged}/>
        </div>
    </div>
</div>