<script>
	import { onMount } from "svelte";
    import "../style.css";
    import Minting from "/src/components/Minting.svelte";
    import Zine from "/src/components/Zine.svelte";
    import { mintingStore } from "/src/store.js";
	import Scrapbook from "../components/Scrapbook.svelte";
    
    let isChecked = true;
    let minting = false;

    const images = [
        '/kokos/koko-000.png',
        '/kokos/koko-001.png',
        '/kokos/koko-002.png',
        '/kokos/koko-003.png',
        '/kokos/koko-004.png',
        '/kokos/koko-005.png',
        '/kokos/koko-006.png',
        '/kokos/koko-007.png',
    ];

    function handleToggle() {
        isChecked = !isChecked;
    }
    onMount(() => {
        mintingStore.subscribe(value => {
            minting = value;
        });

        return () => {
            store.unsubscribe();
        }
    });
    
</script>

<!-- <div class="max-w-[1440px] h-screen mx-auto p-8 font-clash-display"> -->
<div class="font-clash-display mx-auto">

    <!-- SWITCH -->
    <div class="flex items-center gap-2 px-2 py-6 justify-between">
        <a href={"/"}><img loading="lazy" src="/artdao.svg" alt=""></a>
        <span class="ms-3 text-sm font-medium text-black"></span>
        <label class="relative inline-flex items-center cursor-pointer">
            <input on:change={handleToggle} type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-blue-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span class="ms-3 text-sm font-medium text-black"></span>
        <a href={"#"}><h1 class="font-bold uppercase underline text-xs">Connect</h1></a>
    </div>


    
    {#if isChecked}
    <!-- MURAL -->
        <div class="">
            <a href={"#"}><img loading="lazy" class="w-full mx-auto" src="/site/mural.png" alt="Mural"></a>
            <div class="flex items-center justify-between p-4 xl:p-8">
                <div>
                    <h1 class="font-bold text-xs xl:text-sm">PSIPSIKOKO MURAL</h1>
                    <p class="uppercase text-xs">by Frenetik Void and Julian Brangold</p>
                </div>
                <div class="hidden xl:block">
                    <div class="text-sm flex items-center gap-2"><span class="font-bold">1/1</span><img loading="lazy" src="/available.svg" alt=""> RESERVE PRICE: <span class="font-bold">0 ETH / 0.00 USD</span></div>
                    <div class="text-sm flex items-center gap-2"><span class="font-bold"><img loading="lazy" src="/alarm.svg" alt=""></span>[OPEN FOR BIDS]<span class="font-bold"></span></div>
                </div>
                    
                <button class="px-2 xl:px-8 py-2 shadow-md border-2 border-black uppercase text-xs xl:text-sm font-bold">place bid</button>
            </div>
        </div>

    <!-- MINTING -->
        <Minting/>

        <div class="flex items-center justify-between p-4 xl:p-16">
            <div>
                <h1 class="font-bold text-xs xl:text-sm">ADOPTED KOKO'S</h1>
                <p class="uppercase text-xs">From the Koko's collection</p>
            </div>
            <div class="hidden xl:block">
                <div class="text-sm flex items-center gap-2"><span class="font-bold">10/100</span><img loading="lazy" src="/available.svg" alt=""> RESERVE PRICE: <span class="font-bold">0 ETH / 0.00 USD</span></div>                    
                <div class="text-sm"><span class="font-bold"></span> TOTAL COLLECTED:  <span class="font-bold"> 0.5 ETH / 0.00 USD</span></div>
            </div>
            <button class="bg-white px-2 xl:px-8 py-2 shadow-md border-2 border-black uppercase text-xs xl:text-sm font-bold">collect yours</button>

        </div>
        
        <div class="relative">
            <!-- <img class="absolute left-0 top-0 -z-10 h-full w-full object-cover" src="/kokos/kokos-bg.jpg" alt=""> -->
            <img class="absolute left-0 top-0 -z-10 h-full w-full object-cover" src="/kokos/adopted-kokis-mashmellow.png" alt="">
            <div class="grid grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-4 px-4">
                {#each images as image,  index (image)}
                <div key={index} class="h-fit">
                    <p class="text-center font-bold text-xs xl:text-sm">KOKO #00{index}</p>
                    <a href={"#"}><img loading="lazy" src={image} alt class="h-full mx-auto my-2 object-cover shadow-2xl rounded-md"/></a>
                    <p class="font-light text-xs text-center uppercase py-1">Adopted BY: 0xb32.....913</p>
                  </div>
                {/each}
            </div>              
        </div>
        
    {:else}
    <div class="relative">

        <Zine/>
        <!-- <Scrapbook/> -->
    </div>
    {/if}



</div>


<!-- <Zine/> -->
