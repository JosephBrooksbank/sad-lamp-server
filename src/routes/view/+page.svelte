<script lang="ts">
    import Alarms from "$lib/components/Alarms.svelte";
    export let data;
</script>

<Alarms alarms={data.alarms}/>