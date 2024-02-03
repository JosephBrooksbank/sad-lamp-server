<script lang="ts">
    import type {Alarm} from "@prisma/client";
    import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    export let alarm: Alarm
    export let handleDelete: (id: number) => void;

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

<div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body flex flex-row justify-between flex-shrink-0">
        <div class="text-2xl">
            {alarm.time}
        </div>
        <div>
            <input bind:checked={alarm.enabled} type="checkbox" class="toggle toggle-lg toggle-primary" on:change={handleCheckboxChanged}/>
        </div>
        <button class="icon-button" on:click={() => handleDelete(alarm.id)}>
            <Fa icon={faTrashAlt} size="lg"/>
        </button>
    </div>
</div>

<style lang="scss">
    .icon-button {
      transition: all 0.5s ease-out;
      color: slategray;
        &:hover {
          color: darkred;
        }
    }
</style>

