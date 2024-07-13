<script>
    import Mural from "$lib/components/Mural.svelte";
    import Kokos from "$lib/components/Kokos.svelte";
    import Minting from "../lib/components/Minting.svelte";
    import Zine from "$lib/components/Zine.svelte";
    import Loading from "$lib/components/Loading.svelte";
    import {zineStore} from "$lib/store.js"    
    import preloadImages from '$lib/utils/preload.js';
    import images from '$lib/assets/images.js';
    import { fly } from 'svelte/transition';
    
    const preloadPromise = preloadImages(images);
</script>

{#await preloadPromise}

  <Loading/>

{:then preloadedImages}

    {#if !$zineStore}
        <Mural images={preloadedImages.filter(img => img.src.includes('mural'))}/>
        <Minting images={preloadedImages.filter(img => img.src.includes('minting'))}/>
        <Kokos images={preloadedImages.filter(img => img.src.includes('kokos'))}/>
    {:else}
        <Zine images={preloadedImages.filter(img => img.src.includes('zine'))}/>
    {/if}

{:catch error}
    <div>
      Failed to load images: {error.message}
    </div>
{/await}