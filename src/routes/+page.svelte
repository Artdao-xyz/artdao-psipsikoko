<script>
    import Mural from "$lib/components/Mural.svelte";
    import Minting from "$lib/components/Minting.svelte";
    import Kokos from "$lib/components/Kokos.svelte";
    import MintingV2 from "../lib/components/MintingV2.svelte";
    import Zine from "$lib/components/Zine.svelte";

    import {zineStore} from "$lib/components/store.js"

    import { fly } from 'svelte/transition';
    import { onMount } from "svelte";

    let progress = 0;
    let progressBar = 0;

    // Preload images function
    const preloadImages = async (urls) => {
        const promises = urls.map(
        (url) =>
            new Promise((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
                img.onerror = reject;
            })
        );

        await Promise.all(promises);
    };

    // Preload images and store the promise
    let preloadPromise;

    onMount(() => {
        
        preloadPromise = preloadImages(images);
    });



    let images = [
        'site/mural.png',

        'minting/adopt-koki.png',
        'minting/adopt-button.png',
        'minting/minting-background.png',
        'minting/minting-smile1.png',
        'minting/minting-smile2.png',
        'minting/wrong.png',
        'minting/psipsikoko-minting.png',

        'kokos/koko-000.png',
        'kokos/koko-001.png',
        'kokos/koko-002.png',
        'kokos/koko-003.png',
        'kokos/koko-004.png',
        'kokos/koko-005.png',
        'kokos/koko-006.png',
        'kokos/koko-007.png',


    ]
</script>

{#await preloadPromise}
    <div>
    <!-- Loading spinner or placeholder content -->
    Loading images...
  </div>
{:then}

    <Mural images={images.filter(img => img.includes('mural'))}/>
    <MintingV2 images={images.filter(img => img.includes('minting'))}/>
    <Kokos images={images.filter(img => img.includes('kokos'))}/>

    <!-- {#if !$zineStore}
    {:else}
        <Zine/>
    {/if} -->


    {:catch error}
    <div>
      <!-- Error message -->
      Failed to load images: {error.message}
    </div>
  {/await}








  <!-- <script>
    import { fly } from 'svelte/transition'
    
    function preload(src) {
      return new Promise(function(resolve) {
        let img = new Image()
        img.onload = resolve
        img.src = src
      })
    }
    
    let src = 'site/mural.png'
    </script>
    
    {#await preload(src) then _}
      <img {src} in:fly alt="Not Rick Astley">
    {/await} -->