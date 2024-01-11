<script>
    import "../style.css";
    import Minting from "/src/components/Minting.svelte";
    import Zine from "/src/components/Zine.svelte";

    let isChecked = true

    function handleToggle() {
        isChecked = !isChecked;
    }

    $: console.log(isChecked)
    
</script>

<div class="max-w-[1440px] h-screen mx-auto p-8">

    <div class="flex items-center gap-2 justify-center mb-4">
        <span class="ms-3 text-sm font-medium text-black">Minting</span>
        <label class="relative inline-flex items-center cursor-pointer">
            <input on:change={handleToggle} type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-blue-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span class="ms-3 text-sm font-medium text-black">Zine</span>
    </div>

    <div class="w-full bg-blue-100 h-1/3 mb-8 flex items-center justify-center border-2 border-blue-200 rounded-xl">
        <h1 class="text-2xl">Mural</h1>
    </div>
    
    {#if isChecked}
        <Minting minting={false}/>
    {:else}
        <Zine/>
    {/if}

    <div class="w-full bg-green-100 h-1/3 mt-8 flex items-center justify-center border-2 border-green-200 rounded-xl">
        <h1 class="text-2xl">Hammer</h1>
    </div>

</div>


<!-- <Zine/> -->
