<script>
import { onMount } from 'svelte';
import { fade } from 'svelte/transition';
import * as pkg from 'page-flip';

let pageflipHtml;
let img1, img2, img3, img4;
let margin = 100;

onMount(async () => {

    const { PageFlip } = pkg;

    const pageFlip = new PageFlip(pageflipHtml, { 
        width: window.innerWidth, 
        height: window.innerHeight, 
        // size: 'stretch', 
        drawShadow: false, 
        maxShadowOpacity: 0.1, 
        showCover: true
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));
})
</script>

<div 
    in:fade={{ delay: 50, duration: 50 }}
    out:fade={{ delay: 50, duration: 50 }}  
    class="bg-transparent absolute top-1/2 left-1/2 -translate-x-1/2 w-5/6 mx-auto my-auto z-40">

    <div bind:this={pageflipHtml}>
        <div class="my-page">
            <img src='/book/page1.png' alt="page1">
        </div>
        <div class="my-page">
            <img src='/book/page2.png' alt="page2">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page" >
            <img src='/book/page3.png' alt="page3">
        </div>
        <div class="my-page">
            <img src='/book/page4.png' alt="page4">
        </div>
    </div>

</div>
