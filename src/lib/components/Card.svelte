<script lang="ts">
    export let classes: string | null;
</script>

<div class={"card min-w-4/6 bg-neutral text-neutral-content mx-[min(20vw,12px)] "+ classes}>
    <div class="card-body items-center text-center">
        <slot/>
    </div>
</div>
