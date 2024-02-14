<script>
    import "../style.css";
    import Minting from "/src/components/Minting.svelte";
    import Zine from "/src/components/Zine.svelte";

    let isChecked = true;

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

    $: console.log(isChecked)
    
</script>

<div class="max-w-[1440px] h-screen mx-auto p-8 font-clash-display">

    <div class="flex items-center gap-2 justify-between mb-4">
        <a href={"/"}><img src="/artdao.svg" alt=""></a>
        <span class="ms-3 text-sm font-medium text-black"></span>
        <label class="relative inline-flex items-center cursor-pointer">
            <input on:change={handleToggle} type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-blue-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span class="ms-3 text-sm font-medium text-black"></span>
        <a href={"#"}><h1 class="font-bold uppercase underline text-xs">Connect</h1></a>
    </div>


    
    {#if isChecked}
        <!-- <div class="w-full bg-blue-100 h-1/3 mb-8 flex items-center justify-center border-2 border-blue-200 rounded-xl">
            <h1 class="text-2xl">Mural</h1>
        </div> -->

        <div>
            <a href={"#"}><img class="h-full" src="/mural.png" alt="Mural"></a>

            <div class="flex items-center justify-between p-16">
                <div>
                    <h1 class="font-bold">PSIPSIKOKO MURAL</h1>
                    <p class="uppercase text-xs">by Frenetik Void and Julian Brangold</p>
                </div>
                <div>
                    <div class="text-sm flex items-center gap-2"><span class="font-bold">1/1</span><img src="/available.svg" alt=""> RESERVE PRICE: <span class="font-bold">0 ETH / 0.00 USD</span></div>
                    <div class="text-sm flex items-center gap-2"><span class="font-bold"><img src="/alarm.svg" alt=""></span>[OPEN FOR BIDS]<span class="font-bold"></span></div>
                </div>
                    
                <button class="px-8 py-2 shadow-md border-2 border-black uppercase text-sm font-bold">place bid</button>
            </div>
        </div>

        <Minting minting={true}/>

        <!-- <div class="w-full bg-green-100 h-1/3 mt-8 flex items-center justify-center border-2 border-green-200 rounded-xl">
            <h1 class="text-2xl">Hammer</h1>
        </div> -->

        <div class="bg-[#FFD700]">
            <div class="flex items-center justify-between p-16">
                <div>
                    <h1 class="font-bold">ADOPTED KOKO'S</h1>
                    <p class="uppercase text-xs">From the Koko's collection</p>
                </div>
                <div>
                    <div class="text-sm flex items-center gap-2"><span class="font-bold">10/100</span><img src="/available.svg" alt=""> RESERVE PRICE: <span class="font-bold">0 ETH / 0.00 USD</span></div>                    
                    <div class="text-sm"><span class="font-bold"></span> TOTAL COLLECTED:  <span class="font-bold"> 0.5 ETH / 0.00 USD</span></div>
                </div>
                <button class="px-8 py-2 shadow-md border-2 border-black uppercase text-sm font-bold">collect yours</button>

            </div>
            <div class="grid grid-cols-4 pb-16">
                {#each images as image,  index (image)}
                <div key={index} class="">
                    <p class="text-center font-bold py-2">KOKO #00{index}</p>
                    <a href={"#"}><img src={image} alt class="w-fit h-2/3 mx-auto my-auto object-cover shadow-2xl rounded-sm"/></a>
                    <p class="font-light text-xs text-center uppercase py-1">Adopted BY: 0xb32.....913</p>
                  </div>
                {/each}
            </div>              
        </div>
        
    {:else}
        <Zine/>
    {/if}



</div>


<!-- <Zine/> -->
