<script>
	import { onMount } from "svelte";
    import Minting from "/src/components/Minting.svelte"
    import { experience } from "/src/store.js";

    let minting = false;


    onMount(() => {
        const store = experience.subscribe(value => {
            minting = value;
        });

        return () => {
            // store.unsubscribe();
        }
    });

    const startExperience = () => {
        experience.set(true);
        // question = 1;
    }

    $: console.log(minting)

</script>

<div class={`select-none relative m-auto flex items-center justify-center rounded-xl shadow-3xl aspect-video max-h-full max-w-full`}>

    <img class="absolute w-full h-full inset-0 rounded-xl object-contain" src="/zine-background.png" alt="Zine Garden">

    <img class="absolute w-1/4 left-4 bottom-0" src="/zine-flowers.png" alt="Psipsikoko flower">

    <a class="absolute w-fit p-4 top-0 left-1/2 -translate-x-1/2" href="/"><img class="w-full" src="/zine-logo.png" alt="Psipsikoko logo"></a>

    <a class="absolute p-24 top-0 left-0 w-fit origin-top-left scale-[0.175] z-10" href={""}><img class="w-full" src="/zine-hammer.png" alt="Psipsikoko hammer"></a>

    <a class="transition-transform duration-300 ease-in-out hover:scale-[0.15]  absolute w-fit top-12 right-12 origin-top-right scale-[0.1] z-10" href="https://www.instagram.com/psipsikoko/" target="_blank"><img class="translate-x-1/2 -translate-y-1/2" src="/zine-redes.png" alt="Zine Instagram"></a>

    <a class="absolute p-24 bottom-0 right-0 z-10 w-full origin-bottom-right scale-[0.2]" href={""}><img class="" src="/zine-artist.png" alt="Zine Bio"></a>

    <a class="absolute w-fit bottom-0 left-0 z-10 origin-bottom-left scale-[0.15]" href=""><img class="" src="/zine-chatbot.png" alt="Zine Chatbot"></a>
    
    <a class="transition-transform duration-300 ease-in-out hover:scale-[0.2] top-1/4 left-52 absolute w-full scale-[0.15]" on:click={startExperience} href={""}><img src="/zine-minting.png" alt="Zine Minting"></a>

    <img class="absolute w-full left-1/4 scale-[0.2] z-10" src="/zine-oink.png" alt="Zine Oink">

    <img class="absolute h-full w-full -left-52 scale-[0.35] z-10" src="/zine-lore.png" alt="Zine Lore">

    <img class="absolute w-full left-10 top-80 origin-top-left scale-[0.075] z-10" src="/zine-calamarcin.png" alt="Zine Calamarcin">

    <img class="absolute w-full top-1/4 right-0 origin-top-right scale-[0.175] z-10" src="/zine-radio.png" alt="Zine Radio">

    <img class="absolute w-full right-24 top-24 origin-top-right z-10 scale-[.1]" src="/zine-bat.png" alt="Zine Bat">

    <img class="absolute w-full left-60 bottom-0 origin-bottom-left scale-[0.05] z-10" src="/zine-florcita.png" alt="Zine Florcita">


    {#if minting}
        <Minting/>
    {/if}

</div>