<script lang="ts">
    import type {Alarm} from "@prisma/client";

    export let alarm: Alarm
</script>

<div class="card w-11/12 bg-base-100 shadow-xl">
    <div class="card-body flex flex-row flex justify-between">
        <div>
            {alarm.time}
        </div>
        <div>
            {alarm.enabled}
        </div>
    </div>
</div>