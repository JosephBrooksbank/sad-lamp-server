<script lang="ts">
    import "../app.css"
    import { page } from "$app/stores";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
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

<AnimatedRoute>
    <main class = "card min-w-4/6 lg:w-1/3 bg-neutral text-neutral-content mx-auto">
        <div class="card-body items-center text-center">
            <slot/>
        </div>
    </main>
</AnimatedRoute>

