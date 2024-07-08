<script>
    import { fade } from "svelte/transition";
    import { mintingStore } from "$lib/components/store.js";
    import { onMount } from "svelte";
    import JSConfetti from 'js-confetti';
    import CloseButton from "$lib/components/CloseButton.svelte";

    let start = false;
    let wrong = false;
    let reveal = false;
    let finished = false;
    let question = 0;
    let fadeDuration = 300;
    let jsConfetti = null;

    export let images;

    console.log(images)


    const startExperience = () => {
        start = true;
        question = 0;
        mintingStore.set(true);
    };

    const goWrong = () => {
        wrong = true;  
        setTimeout(() => {
            wrong = false;
            question = question >= 3 ? (finished = true, 3) : question + 1;
            console.log(finished)

            if (finished) {
                setTimeout(()=> {
                    jsConfetti.addConfetti({
                        emojis: ['🐽', '💩', '🤡', '🎉', '🍬', '🌸'],
                        emojiSize: 30,
                        // confettiNumber: 250,
                    })
                    reveal = true
                }, 2000)
            }
        }, 2000);
    }

    const closeExperience = () => {
        start = false;
        question = 0;
        wrong = false;
        mintingStore.set(false);
    };

    onMount(()=> jsConfetti = new JSConfetti());
    
    $: {
        closeExperience();
        
        const interval = setInterval(() => { 
            isVisible = !isVisible;
            setTimeout(() => {
                isVisible = !isVisible;
            }, 100);
        }, 5000);
        
        clearInterval(interval);
    };

</script>

<div class="relative">
<button on:click={startExperience}><img draggable="false" class="object-contain h-full" src={images[6]} alt="Minting"></button>

{#if start}

    {#if question == 0}
        <div transition:fade={{ delay: 150, duration: fadeDuration }} class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full backdrop-blur-sm">
            <img class="relative select-none mx-auto" src={images[0]} alt="adopt koki">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col w-1/2 h-1/2 xl:w-96 xl:h-96 gap-2 xl:gap-6 m-auto font-century uppercase tracking-[0.3em]">
                <h1 class="select-none text-lg xl:text-5xl text-center">adopti ami<br/>koki</h1>
                <img class="absolute w-10 h-10 xl:w-fit xl:h-fit right-5 xl:right-0 top-5 xl:top-10" src="/minting/heart.png" alt="heart">
                <div class="text-xs xl:text-3xl bg-white p-1 xl:p-3 flex md:w-1/2 xl:w-full justify-between border-black border-[1px] shadow-xl shadow-pink-500">
                    <label for="amount">Amounti</label>
                    <input class="w-10 xl:w-32 text-right" type="text" id="amount" name="amount">
                </div>
                <div class="text-xs xl:text-3xl bg-white p-1 xl:p-3 flex md:w-1/2 xl:w-full justify-between border-black border-[1px] shadow-xl shadow-pink-500">
                    <label for="total flex-grow">Totali</label>
                    <p class="text-right">10 ETH</p>
                </div>

                <button on:click={()=>{question++}} class="w-32 h-32 xl:w-72 xl:h-12" type="submit"><img class="w-full" src={images[1]} alt=""></button>
            </div>
        </div>

    <!-- QUESTION 1 -->
    {:else if question == 1}
        <img class="absolute left-0 top-0 w-full object-cover" src={images[2]} alt="Q1 background">

        <svg transition:fade={{ duration: fadeDuration }} class="absolute left-0 top-0 w-full object-cover" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2436 1419">
            <image width="2436" height="1419" href="/minting/minting-01.png"></image> 
            <a on:click={goWrong} href={"#"}>
            <rect x="1478" y="650" fill="#fff" opacity="0" width="636" height="90"></rect>
            </a>
            <a on:click={goWrong} href={"#"}>
            <rect x="1450" y="816" fill="#fff" opacity="0" width="700" height="82"></rect>
            </a>
            <a on:click={goWrong} href={"#"}>
            <rect x="1568" y="972" fill="#fff" opacity="0" width="430" height="92"></rect>
            </a>
        </svg>

    <!-- QUESTION 2 -->
    {:else if question == 2}
        <img class="absolute left-0 top-0 w-full object-cover" src={images[2]} alt="Q1 background">
        <img in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="absolute left-0 top-0 h-full w-full" src={images[4]} alt="Q1 background">
        <svg in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="absolute left-0 top-0 h-full w-full" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2436 1419">
            <image width="2436" height="1419" href="/minting/minting-02.png"></image> 
            <a on:click={goWrong} href={"#"}>
                <rect x="1450" y="648" fill="#fff" opacity="0" width="684" height="94"></rect>
            </a>
            <a on:click={goWrong} href={"#"}>
                <rect x="1430" y="816" fill="#fff" opacity="0" width="728" height="82"></rect>
            </a>
            <a on:click={goWrong} href={"#"}>
                <rect x="1452" y="972" fill="#fff" opacity="0" width="690" height="92"></rect>
            </a>
        </svg>
    <!-- QUESTION 3 -->
    {:else if question == 3}
        <img class="absolute left-0 top-0 w-full object-cover" src={images[2]} alt="Q1 background">
        <img in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="absolute left-0 top-0 h-full w-full" src={images[3]} alt="Q1 background">
        <svg in:fade={{ duration: fadeDuration }} out:fade={{ duration: fadeDuration }} class="absolute left-0 top-0 h-full w-full" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2436 1419">
            <image width="2436" height="1419" href="/minting/minting-03.png"></image> 
            <a on:click={goWrong} href={"#"}>
            <rect x="1694" y="640" fill="#fff" opacity="0" width="212" height="82"></rect>
            </a>
            <a on:click={goWrong} href={"#"}>
            <rect x="1554" y="812" fill="#fff" opacity="0" width="476" height="82"></rect>
            </a>
            <a on:click={goWrong} href={"#"}>
            <rect x="1466" y="968" fill="#fff" opacity="0" width="694" height="92"></rect>
            </a>
        </svg>
    {/if}

        <!-- WRONG -->
    {#if wrong }
        <img transition:fade={{ duration: fadeDuration }} class="absolute left-0 top-0 w-full object-cover" src={images[5]} alt="Q1 background">
    {/if}

    {#if finished}
        <img class="absolute left-0 top-0 h-full w-full blur-sm" src="/minting/psipsikoko-minting.png" alt="Q1 background">

        <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <img class="animatecss animatecss-shakeY animatecss-infinite animatecss-fast" src="/minting/blending-machine-1.png" alt="blending machine bottom">
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <img class="animatecss animatecss-shakeY animatecss-infinite" src="/minting/blending-machine-0.png" alt="blending machine bottom">
        </div>
    {/if}

    {#if reveal}


        <img class="absolute left-0 top-0 h-full w-full blur-sm" src="/minting/psipsikoko-minting.png" alt="Q1 background">

        <div class="bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-xl shadow-black shadow-3xl flex justify-center items-center back">

            <CloseButton on:click={closeExperience}/>

            <img class="object-contain" src="/kokos/koko-000.png" alt="koko reveal">
        </div>
    {/if}
{/if}
</div>