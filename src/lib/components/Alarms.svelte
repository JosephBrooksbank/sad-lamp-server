<script lang="ts">
    import AlarmRow from "./AlarmRow.svelte";
    import {fetchFromApi} from "$lib/postToApi.js";
    import type { Alarm } from "@prisma/client";
    import Card from "$lib/components/Card.svelte";

    export let alarms: Alarm[];

    const handleDelete = async (id: number) => {
        const response = await fetchFromApi('/deleteAlarm', {id: id})
        if ((await response.json()).id == id) {
            alarms = alarms.filter(a => a.id != id)
        }
    }
</script>

<Card>
    <h2 class="card-title">Alarms</h2>
    {#each alarms as alarm}
        <AlarmRow {alarm} handleDelete={handleDelete} />
    {/each}
</Card>
