<script lang="ts">

import { page } from "$app/stores";
import { fly } from "svelte/transition";
console.log($page)
</script>

{#key $page.url.pathname}
    <div in:fly={{ x:'-100%', duration: 500}}>
        <slot/>
    </div>
{/key}