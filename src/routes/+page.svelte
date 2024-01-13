<script lang="ts">
    import AddAlarm from "$lib/components/AddAlarm.svelte";
    import Alarms from "$lib/components/Alarms.svelte";
    export let data;
</script>

<AddAlarm/>
<Alarms alarms={data.alarms}/>