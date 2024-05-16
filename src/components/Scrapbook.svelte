<script>
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import * as pkg from 'page-flip';
import { scrapbookStore } from "/src/store.js";

let pageflipHtml;
let img1, img2, img3, img4;
let margin = 100;
let scrapbook;

const closeScrapbook = () => {
    scrapbookStore.set(false)
    // console.log(false)
}

onMount(async () => {

    const { PageFlip } = pkg;

    const aspecRatio = 16/9

    scrapbookStore.subscribe(value => {
            scrapbook = value;
        });

    const pageFlip = new PageFlip(pageflipHtml, { 
        width: window.innerHeight, 
        height: window.innerHeight / aspecRatio, 
        // size: 'stretch', 
        drawShadow: false, 
        maxShadowOpacity: 0.1, 
        showCover: false,
    });

    // pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    pageFlip.loadFromImages(['/book/page1.png', '/book/page2.png', '/book/page3.png', '/book/page4.png' ]);

})
</script>

<div bind:this={scrapbook}
    class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">

    <a on:click={closeScrapbook} href={"#"} class="self-center">
        <img src="/close.svg" alt="" class="invert bg-black p-2 rounded-full">
    </a>

    <div bind:this={pageflipHtml} class="">
    </div>

</div>
<!-- <div 
    in:fade={{ delay: 50, duration: 50 }}
    out:fade={{ delay: 50, duration: 50 }}  
    class="w-fit h-fit z-40">

    <a href={"#"} class="absolute top-0 right-0">
        <img src="/close.svg" alt="">
    </a>

    <div bind:this={pageflipHtml} class="">
        <div class="my-page">
            <img src='/book/page1.png' alt="page1">
        </div>
        <div class="my-page">
            <img src='/book/page2.png' alt="page2">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page">
            <img src='/book/page4.png' alt="page4">
        </div>
    </div>

</div> -->
