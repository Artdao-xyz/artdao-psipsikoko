<script>
    export let images;
</script>

<div>
    <a href={"#"}><img class="w-full mx-auto" src={images[0].src} alt="Mural"></a>
    <div class="flex items-center justify-between p-4 xl:p-8">
        <div>
            <h1 class="font-bold text-xs xl:text-sm">PSIPSIKOKO MURAL</h1>
            <p class="uppercase text-xs">by Frenetik Void and Julian Brangold</p>
        </div>
        <div class="hidden xl:block">
            <div class="text-sm flex items-center gap-2"><span class="font-bold">1/1</span><img  src="/available.svg" alt=""> RESERVE PRICE: <span class="font-bold">0 ETH / 0.00 USD</span></div>
            <div class="text-sm flex items-center gap-2"><span class="font-bold"><img  src="/alarm.svg" alt=""></span>[OPEN FOR BIDS]<span class="font-bold"></span></div>
        </div>
            
        <button class="px-2 xl:px-8 py-2 shadow-md border-2 border-black uppercase text-xs xl:text-sm font-bold">place bid</button>
    </div>
</div>