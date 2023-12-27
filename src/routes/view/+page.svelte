<script lang="ts">
    import AlarmRow from "./AlarmRow.svelte";
    import {fetchFromApi} from "$lib/postToApi.js";

    export let data;

    const handleDelete = async (id: number) => {
        const response = await fetchFromApi('/deleteAlarm', {id: id})
        if ((await response.json()).id == id) {
            data.alarms = data.alarms.filter(a => a.id != id)
        }
    }
</script>

<h2 class="card-title">Alarms</h2>
{#each data.alarms as alarm}
    <AlarmRow {alarm} handleDelete={handleDelete} />
{/each}
