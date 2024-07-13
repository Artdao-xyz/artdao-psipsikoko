<script>
    export let images;
</script>

<div class="">
    <div class="relative flex items-center justify-between p-4 xl:p-16">
        <div>
            <h1 class="font-bold text-xs xl:text-sm">ADOPTED KOKO'S</h1>
            <p class="uppercase text-xs">From the Koko's collection</p>
        </div>
        <div class="hidden xl:block">
            <div class="text-sm flex items-center gap-2"><span class="font-bold">10/100</span><img  src="/available.svg" alt=""> RESERVE PRICE: <span class="font-bold">0 ETH / 0.00 USD</span></div>                    
            <div class="text-sm"><span class="font-bold"></span> TOTAL COLLECTED:  <span class="font-bold"> 0.5 ETH / 0.00 USD</span></div>
        </div>
        <button class="bg-white px-2 xl:px-8 py-2 shadow-md border-2 border-black uppercase text-xs xl:text-sm font-bold">collect yours</button>
    </div>

    <div class="relative py-2">
        <!-- <img class="absolute left-0 top-0 -z-10 h-full w-full object-cover" src="/kokos/kokos-bg.jpg" alt=""> -->
        <img class="absolute left-0 top-0 -z-10 h-full w-full object-cover" src="/kokos/adopted-kokis-mashmellow.png" alt="">
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-y-8 gap-x-4 px-4">
            {#each images as image,  index (image)}
            <div key={index} class="h-fit">
                <p class="text-center font-bold text-xs xl:text-sm">KOKO #00{index}</p>
                <a href={"#"}><img  src={image.src} alt class="h-full mx-auto my-2 object-cover shadow-2xl rounded-md"/></a>
                <p class="font-light text-[10px] text-center uppercase py-1">Adopted BY: 0xb32.....913</p>
            </div>
            {/each}
        </div>              
    </div>
</div>