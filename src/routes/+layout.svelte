<script>
    import "/src/style.css";
    import {zineStore} from "$lib/components/store.js"

    const handleToggle = (e) => {
        zineStore.set(e.target.checked);
    }
</script>

<div class="font-clash-display mx-auto">

    <!-- SWITCH -->
    <div class="flex items-center gap-2 px-2 py-6 justify-between">
        <a href={"/"}><img  src="/artdao.svg" alt=""></a>
        <span class="ms-3 text-sm font-medium text-black"></span>
        <label class="relative inline-flex items-center cursor-pointer">
            <input on:change={e => handleToggle(e)} type="checkbox" value="" class="sr-only peer">
            <div class="w-11 h-6 bg-blue-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span class="ms-3 text-sm font-medium text-black"></span>
        <a href={"#"}><h1 class="font-bold uppercase underline text-xs">Connect</h1></a>
    </div>

    <slot/>
</div>
