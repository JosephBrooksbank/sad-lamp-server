<script lang="ts">
    import "../app.css"
    import { page } from "$app/stores";
    import type {LayoutData} from "./$types";
    let form: HTMLFormElement;
    export let data: LayoutData;
    let isOn = data.isOn;
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";

    const handlesSubmit = async () =>
    {
        await fetch('/api/lampControl', {
            method: "POST",
            body: JSON.stringify({
                isOn: isOn
            })
        });
    }

</script>

<nav class="flex justify-center my-6">
    <ul class="steps">
        <a href="/"
           class="step"
           class:step-primary={$page.route.id === "/"}
        >
            Add
        </a>
        <a class="step" href="/view" class:step-primary={$page.route.id?.startsWith("/view")
        }>
            View
        </a>


    </ul>
</nav>
<div class="card min-w-4/6 lg:w-1/3 bg-neutral text-neutral-content mx-auto mb-10">
    <div class="card-body items-center text-center">
        <h2 class="card-title">Lamp</h2>
        <form bind:this={form} method="POST" action="" on:submit|preventDefault={handlesSubmit}>
            <input type="checkbox" class="toggle toggle-accent" name="isOn" value="isOn" bind:checked={isOn} on:change={() => form.requestSubmit()}>
        </form>
    </div>
</div>
<AnimatedRoute>

    <main class="flex flex-col gap-10">
        <slot/>
    </main>
</AnimatedRoute>

