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

<div class="card w-11/12 bg-base-100 shadow-xl">
    <div class="card-body flex flex-row justify-between">
        <div>
            {alarm.time}
        </div>
        <div>
            <input bind:checked={alarm.enabled} type="checkbox" class="toggle toggle-primary" on:change={handleCheckboxChanged}/>
        </div>
        <button class="icon-button" on:click={() => handleDelete(alarm.id)}>
            <Fa icon={faTrashAlt}/>
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

