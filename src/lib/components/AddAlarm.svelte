<script lang="ts">
    import { enhance } from "$app/forms";
    import Card from "$lib/components/Card.svelte";

    let form: HTMLFormElement;
</script>
<Card>
    <h2 class="card-title">Add Alarm</h2>
    <form method="POST" action="/?/addAlarm" style="display: flex; flex-direction: column;" use:enhance>
        {#if form?.missing}<p class="text-error">A time is required</p>{/if}
        <label class="label" for="time">
        <span class="label-text">
            Set Time
        </span>
        </label>
        <div>
            <input class="input input-bordered input-primary" type="time" name="time" placeholder="Choose a Time...">
        </div>
        <button class="btn btn-primary my-3">Add Alarm</button>
    </form>
</Card>
