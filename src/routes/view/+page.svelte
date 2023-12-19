<script>
    import AlarmRow from "./AlarmRow.svelte";

    export let data;

</script>

<h2 class="card-title">Alarms</h2>
{#each data.alarms as alarm}
    <AlarmRow {alarm}/>
{/each}
