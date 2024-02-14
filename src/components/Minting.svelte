<script>
    import "../style.css";

    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    
    export let minting;
    
    $: console.log(start)

    let question = 0;
    let start = false;
    let wrong = false;
    let fadeDuration = 150;
    let isVisible = false;

    onMount(() => {
        const interval = setInterval(() => { 
            isVisible = !isVisible;
            setTimeout(() => {
                isVisible = !isVisible;
            }, 100);
        }, 5000);

            return () => {
                clearInterval(interval);
            }
    });

    const startExperience = () => {
        start = true;
        question = 1;
    }

    const closeExperience = () => {
        start = false;
        question = 0;
        wrong = false;
        minting = false;
    }

    $: if (minting) {

        setTimeout(() => {
            startExperience()
        }, "10");
    }

    // HELPER
    function handleClick(event) {
        console.log(event.clientX, event.clientY);
    }
</script>
<!-- <div class={`transition-height duration-2000 select-none bg-pink-100 relative m-auto flex items-center justify-center border-pink-200 rounded-xl border-2 shadow-3xl aspect-video z-20 ${start ? "max-h-full max-w-full" : "max-h-[360px] max-w-full"}`}> -->
<div class={`select-none bg-blue-200 relative m-auto flex items-center justify-center border-blue-200 rounded-sm border-2 aspect-video z-20 max-h-full max-w-full`}>
    <!-- BACKGROUND -->

    <div class="absolute right-0 top-0 z-20">
        <a on:click={ closeExperience } href={"#"}><img src="/exit.png" alt="exit"></a>
    </div>

    <a class={`${start ? "cursor-default" : "cursor-pointer"} absolute inset-0`} on:click= { startExperience } href={"#"}><img class="h-full w-full object-contain" src="/minting-background.png" alt="Minting background"></a>
    
    {#if isVisible}
        <img class="absolute max-h-full" src="/minting-eyes.png" alt="eyes">
    {/if}

    {#if question == 1}
        <!-- QUESTION 1 -->                
        <svg in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="absolute max-h-full z-10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2436 1419">
            <image width="2436" height="1419" href="/minting-01.png"></image> 
            <a on:click={()=> { question++ }} href={"#"}>
              <rect x="1478" y="650" fill="#fff" opacity="0" width="636" height="90"></rect>
            </a>
            <a on:click={()=> { question++ }} href={"#"}>
              <rect x="1450" y="816" fill="#fff" opacity="0" width="700" height="82"></rect>
            </a>
            <a on:click={()=> { question++ }} href={"#"}>
              <rect x="1568" y="972" fill="#fff" opacity="0" width="430" height="92"></rect>
            </a>
        </svg>

    {/if}

    {#if question == 2}
        <!-- QUESTION 2 -->
        <img in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="cursor-default absolute max-h-full z-10" src="/minting-smile1.png" alt="Q1 background">
        
        <svg in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="cursor-default absolute max-h-full z-10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2436 1419">
            <image width="2436" height="1419" href="/minting-02.png"></image> 
            <a on:click={()=> { question++ }} href={"#"}>
                <rect x="1450" y="648" fill="#fff" opacity="0" width="684" height="94"></rect>
            </a>
            <a on:click={()=> { question++ }} href={"#"}>
                <rect x="1430" y="816" fill="#fff" opacity="0" width="728" height="82"></rect>
            </a>
            <a on:click={()=> { question++ }} href={"#"}>
                <rect x="1452" y="972" fill="#fff" opacity="0" width="690" height="92"></rect>
            </a>
        </svg>
    {/if}

    {#if question == 3}
        <!-- QUESTION 3 -->
        <img in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="cursor-default absolute max-h-full z-10" src="/minting-smile2.png" alt="Q1 background">
        <svg in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="cursor-default absolute max-h-full z-10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2436 1419">
            <image width="2436" height="1419" href="/minting-03.png"></image> 
            <a on:click={()=> { wrong = true }} href={"#"}>
              <rect x="1694" y="640" fill="#fff" opacity="0" width="212" height="82"></rect>
            </a>
            <a on:click={()=> { wrong = true }} href={"#"}>
              <rect x="1554" y="812" fill="#fff" opacity="0" width="476" height="82"></rect>
            </a>
            <a on:click={()=> { wrong = true }} href={"#"}>
              <rect x="1466" y="968" fill="#fff" opacity="0" width="694" height="92"></rect>
            </a>
        </svg>
    {/if}

    {#if wrong }
        <!-- WRONG -->
        <img in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration } } class="cursor-default absolute max-h-full z-10" src="/minting-wrong.png" alt="Q1 background">
        <img in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="cursor-default absolute max-h-full z-10" src="/minting-sad1.png" alt="Q1 background">
    {/if}

</div>

