<script>
	import { onMount } from "svelte";
    import { artistBioStore } from "$lib/components/store.js";

    onMount(() => {
    })
    const closeArtistBio = () => {
        artistBioStore.set(false)
    }

</script>

<div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-4/5 ">
    <a on:click={closeArtistBio} class="absolute right-0 top-0 p-4"  href={"#"}><img src="/close.svg" alt="close"></a>
    <img class="shadow-md shadow-black rounded-md" src="/zine/artist-about.jpg" alt="Artist About">
</div>