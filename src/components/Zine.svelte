<script>
	import { onMount } from "svelte";
    import Minting from "/src/components/Minting.svelte"
    import { experience } from "/src/store.js";
	import Scrapbook from "./Scrapbook.svelte";
    import { scrapbookStore } from "/src/store.js";

    let mintingExperience = false;
    let scrapbookExperience = false;
    let audioLoop;
    let radio;
    let audioBat;
    let artistBio
    let logo;
    let redes, oink, artists, camaroncin, chatbot, bat, hammer, florcita, minting, scrapbook;
    let audioOink;
    let audioFlorcita;
    let audioCamaroncin;

    const audioFiles = [
        '/sound/misc_1.mp3',
        '/sound/misc_2.mp3',
        '/sound/misc_3.mp3',
        '/sound/misc_4.mp3',
        '/sound/misc_5.mp3',
        '/sound/misc_6.mp3'
    ];
    let audioPlayer;

    onMount(() => {
        const store = experience.subscribe(value => {
            mintingExperience = value;
        });

        scrapbookStore.subscribe(value => {
            scrapbookExperience = value;
        });
        
        logo.classList.toggle("logo")

        // Call the function to play audio files randomly
        playRandomAudio();

        return () => {
            // store.unsubscribe();
        }
    });

    const startExperience = () => {
        experience.set(true);
        // question = 1;
    }

    $: console.log(minting)

    const playAudio = () => {
        let radioInterval, objectsInterval;
        if (audioLoop.paused) {
            audioLoop.play();
            radioInterval = setTimeout(()=>{
                radio.classList.toggle("animate-bounce");
            }, 2250)
            
            objectsInterval = setTimeout(() => {
                logo.classList.toggle("logo")
                camaroncin.classList.toggle("animate-bounce")
                florcita.classList.toggle("animate-bounce")
                artists.classList.toggle("animate-bounce")
                bat.classList.toggle("animate-bounce")
                chatbot.classList.toggle("animate-bounce")
                oink.classList.toggle("animate-bounce")
                hammer.classList.toggle("animate-bounce")
                redes.classList.toggle("animate-bounce")
                scrapbook.classList.toggle("animate-bounce")
                minting.classList.toggle("animate-bounce")

            }, 11750)
        } else {
            audioLoop.pause();
            audioLoop.currentTime = 0;
            clearInterval(radioInterval);
            clearInterval(objectsInterval);
            radio.classList.toggle("animate-bounce");
            logo.classList.toggle("logo")
            camaroncin.classList.toggle("animate-bounce")
            florcita.classList.toggle("animate-bounce")
            artists.classList.toggle("animate-bounce")
            bat.classList.toggle("animate-bounce")
            chatbot.classList.toggle("animate-bounce")
            oink.classList.toggle("animate-bounce")
            hammer.classList.toggle("animate-bounce")
            redes.classList.toggle("animate-bounce")
            scrapbook.classList.toggle("animate-bounce")
            minting.classList.toggle("animate-bounce")
        }
    }

    const playBat = () => {
        audioBat.play();
    }

    const playManguera1 = () => {
        audioOink.play();
    }
    const playManguera2 = () => {
        audioFlorcita.play();
    }
    const playManguera3 = () => {
        audioCamaroncin.play();
    }

    const closeBio = () =>{
        artistBio.classList.add('hidden')
    }

    const openBio = () => {
        artistBio.classList.remove('hidden')
    }

    // Shuffle the array randomly
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
    }

    // Function to play audio files randomly with a random delay between each playback
    function playRandomAudio() {
    const shuffledFiles = shuffleArray(audioFiles);
    let currentIndex = 0;

    function playNext() {
        audioPlayer.src = shuffledFiles[currentIndex];
        audioPlayer.play();
        currentIndex = (currentIndex + 1) % shuffledFiles.length; // Increment index and loop back to 0 when it reaches the end
    }

    // Play the first audio file
    playNext();

    // Event listener to play the next audio file when the current one ends
    audioPlayer.onended = () => {setTimeout(()=>{
        playNext()}, Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000)};
    }



</script>

<!-- <div class={`select-none relative m-auto flex items-center justify-center rounded-xl shadow-3xl aspect-video max-h-full max-w-full`}> -->

<img class="select-none absolute inset-0 object-cover h-full w-full" src="/zine/background.png" alt="background" usemap="#image-map-zine"/>
<!-- <div class="relative h-screen bg-red-200"> -->
    
    <div class="max-w-[1440px] h-screen mx-auto relative ">
    <!-- <div class="bg-blue-200 xl:bg-red-200 2xl:bg-green-200 max-w-[1440px] h-screen mx-auto relative "> -->

        <!-- BACKGROUND MUSIC -->
        <audio bind:this={audioPlayer} src=""></audio>

        <!-- LOGO -->
        <a href={"#"} class="">
            <div class="left-1/2 -translate-x-1/2 top-0 absolute mt-4 w-72 h-14 xl:h-auto xl:w-auto">
                <img bind:this={logo} class="logo" src="/zine/logo.png" alt="logo" />
            </div>
        </a>

        <!-- RADIO -->
        <a on:click={playAudio} href={"#"} class="">
            <div class="right-12 top-40 w-32 h-24 lg:right-52 lg:top-56 absolute xl:h-auto xl:w-auto">
                <img bind:this={radio} class="" src="/zine/radio.png" alt="radio" />
            </div>
        </a>
        <audio bind:this={audioLoop} src="/sound/radio-loop.mp3"></audio>

        <!-- SOCIAL MEDIA -->
        <a href="https://www.instagram.com/psipsikoko/" target="_blank" class="">
            <div class="top-28 right-6 w-10 h-9 lg:right-24 lg:top-20 absolute xl:h-auto xl:w-auto">
                <img bind:this={redes} class="hover:scale-125" src="/zine/redes.png" alt="redes"/>
            </div>
        </a>

        <!-- ARTISTS BIO -->
        <a href={"#"} class="">
            <div class="bottom-12 right-8 w-24 h-16 lg:right-24 lg:bottom-10 absolute xl:h-auto xl:w-auto">
                <a on:click={openBio} href={"#"}><img bind:this={artists} class="hover:animatecss hover:animatecss-pulse hover:animate-infinite" src="/zine/artists.png" alt="artists" /></a>
            </div>
        </a>
        <div bind:this={artistBio} class="hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-4/5 ">
            <a on:click={closeBio} class="absolute right-0 top-0 p-4"  href={"#"}><img src="/close.svg" alt="close"></a>
            <img class="shadow-md shadow-black rounded-md" src="/zine/artist-about.jpg" alt="Artist About">
        </div>

        <!-- CHATBOT -->
        <a href={"https://t.me/psipsikoko"} target="_blank" class="">
            <div class="left-10 bottom-20 w-20 h-24 lg:left-44 lg:bottom-10 absolute xl:h-auto xl:w-auto">
                <img bind:this={chatbot} class="" src="/zine/bot.png" alt="chatbot" />
            </div>
        </a>

        <!-- BAT -->
        <a on:click={playBat} href={"#"} class="hidden">
            <div class="lg:right-96 lg:top-96 absolute xl:h-auto xl:w-auto">
                <!-- <img class="rotating-bat" src="/zine/bat.png" alt="bat" /> -->
                <img bind:this={bat} class="rotating-bat w-32 h-12" src="/zine/bat-gif.gif" alt="bat" />
            </div>
        </a>
        <audio bind:this={audioBat} src="/sound/corto_4.mp3"></audio>
        
        <!-- HAMMER -->
        <a href={"#"} class="">
            <div class="left-20 top-28 w-16 h-16 lg:left-12 lg:top-16 absolute xl:h-auto xl:w-auto">
                <img bind:this={hammer} class="hover:animate-spin hover:animate-duration-[2000ms]" src="/zine/hammer.png" alt="hammer" />
            </div>
        </a>

        <!-- SCRAPBOOK -->
        <a on:click={() => scrapbookStore.set(true)} href={"#"} class="">
            <div class="bottom-32 right-12 w-36 h-24 lg:left-1/2 lg:bottom-44 absolute xl:h-auto xl:w-auto">
                <img bind:this={scrapbook} class="hover:animate-wiggle hover:animate-infinite hover:animate-ease-in-out" src="/zine/scrapbook.png" alt="scrapbook" />
            </div>
        </a>
        {#if scrapbookExperience}
            <Scrapbook/>
        {/if}

        <!-- MINTING KOKIS -->
        <a on:click={()=>{mintingExperience = true}} href={"#"} class="">
            <div class="top-72 left-20 w-56 h-40 lg:left-1/3 lg:top-1/3 absolute xl:h-auto xl:w-auto">
                <img bind:this={minting} class="" src="/zine/minting.png" alt="minting"/>
            </div>
        </a>

        <!-- PIG -->
        <a on:click={playManguera1} href={"#"} class="opacity-0">
            <div class="-right-12 top-80 w-20 lg:right-60 lg:bottom-96 absolute xl:h-auto xl:w-auto">
                <img bind:this={oink} class="" src="/zine/oink.png" alt="oink"/>
            </div>
        </a>
        <audio bind:this={audioOink} src="/sound/manguera_1.mp3"></audio>

        <!-- FLOWER -->
        <a on:click={playManguera2} href={"#"} class="">
            <div class="bottom-4 left-32 w-10 h-10 lg:left-80 lg:bottom-0 absolute xl:h-auto xl:w-auto">
                <img bind:this={florcita} class="" src="/zine/florcita.png" alt="florcita" />
            </div>
        </a>
        <audio bind:this={audioFlorcita} src="/sound/manguera_2.mp3"></audio>

        <!-- CAMARONCIN -->
        <a on:click={playManguera3} href={"#"} class="">
            <div class="top-52 left-4 w-20 h-20 lg:left-32 lg:top-1/2 absolute xl:h-auto xl:w-auto">
                <img bind:this={camaroncin} class="hover:animatecss hover:animatecss-jello" src="/zine/calamarcin.png" alt="calamarcin"/>
            </div>
        </a>
        <audio bind:this={audioCamaroncin} src="/sound/manguera_3.mp3"></audio>

    </div>
    

<!-- </div> -->
    
    {#if mintingExperience}
    <div class="absolute left-0 w-full top-0">
        <Minting/>
    </div>
    {/if}
    



<style>
    @keyframes rotateBat {
        15% {
            transform: translate(-250%, -500%);
        }
        30% {
            transform: translate(-500%, -500%);
        }
        50% {
            transform: translate(-500%, 500%);
        }
        60% {
            transform: translate(-250%, 250%);
        }
        75% {
            transform: translate(100%, 500%);
        }
        90% {
            transform: translate(0%, 500%);
        }
    }

    .rotating-bat {

        animation: rotateBat 10s linear infinite; /* Adjust animation duration and timing function as needed */
    }

    @keyframes logoDance {
        0% {
            transform: skewX(35deg);
        }
        50% {
            transform: skewX(-35deg);
        }
        100% {
            transform: skewX(35deg);
        }
    }

    .logo {
        animation: logoDance 1.15s ease-in-out infinite;
    }

</style>