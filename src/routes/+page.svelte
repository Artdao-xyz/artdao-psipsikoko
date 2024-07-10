<script>
    import {zineStore} from "$lib/store.js"
    import { onMount } from "svelte";
    
    import Mural from "$lib/components/Mural.svelte";
    import Kokos from "$lib/components/Kokos.svelte";
    import Minting from "../lib/components/Minting.svelte";
    import Zine from "$lib/components/Zine.svelte";
    import Loading from "$lib/components/Loading.svelte";

    import { fly } from 'svelte/transition';

    let progress = 0;

    const preloadImages = async (urls) => {
        const promises = urls.map(
            (url, index) => {
                new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = url;
                    img.onload = resolve;
                    img.onerror = reject;
                })
                progress = (index / (images.length - 1)) * 100;
                // console.log('progress', progress)
            }
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
        'minting/minting-01.png',
        'minting/minting-02.png',
        'minting/minting-03.png',

        'kokos/koko-000.png',
        'kokos/koko-001.png',
        'kokos/koko-002.png',
        'kokos/koko-003.png',
        'kokos/koko-004.png',
        'kokos/koko-005.png',
        'kokos/koko-006.png',
        'kokos/koko-007.png',

        'zine/artist-about.jpg',
        'zine/artists.png',
        'zine/background.png',
        'zine/bat-gif.gif',
        'zine/bot.png',
        'zine/calamarcin.png',
        'zine/florcita.png',
        'zine/hammer.png',
        'zine/logo.png',
        'zine/minting.png',
        'zine/mute.svg',
        'zine/oink.png',
        'zine/radio.png',
        'zine/redes.png',
        'zine/scrapbook.png'
    ];
</script>

{#await preloadPromise}

  <Loading {progress}/>

  {:then}
    {#if !$zineStore}
        <Mural images={images.filter(img => img.includes('mural'))}/>
        <Minting images={images.filter(img => img.includes('minting'))}/>
        <Kokos images={images.filter(img => img.includes('kokos'))}/>
    {:else}
        <Zine images={images.filter(img => img.includes('zine'))}/>
    {/if}

{:catch error}
    <div>
      Failed to load images: {error.message}
    </div>
{/await}