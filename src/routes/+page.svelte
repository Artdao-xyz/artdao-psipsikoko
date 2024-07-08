<script>
    import Mural from "$lib/components/Mural.svelte";
    import Minting from "$lib/components/Minting.svelte";
    import Kokos from "$lib/components/Kokos.svelte";
    import MintingV2 from "../lib/components/MintingV2.svelte";
    import Zine from "$lib/components/Zine.svelte";

    import {zineStore} from "$lib/components/store.js"
</script>



    {#if !$zineStore}
        <Mural/>
        <MintingV2/>
        <Kokos/>
    {:else}
        <Zine/>
    {/if}


