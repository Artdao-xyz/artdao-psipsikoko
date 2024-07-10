<script>
	export let progress;

	let progressBar;
	let progressBarContainer;
	let enter = false;

	$: {
		if (progressBar) {
			progressBar.value = progress;
		}
	}
</script>

<!-- Loading Bar -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click|stopPropagation
	bind:this={progressBarContainer}
	class="cursor-default bg-white text-white font-monda fixed inset-0 flex flex-col justify-center items-center z-50 bg-cover bg-center">
    
    <img draggable="false" class="animate-spin" src="loading.png" alt="Loading">

	<progress
		bind:this={progressBar}
		class="custom-progress-bar w-full h-1"
		value={progress}
		max="100"
	></progress>
</div>

<style>
	/* Custom styles for progress bar */
	progress.custom-progress-bar::-webkit-progress-bar {
		background-color: #7e7e7e;
	}

	progress.custom-progress-bar::-webkit-progress-value {
		background-color: #000000;
	}

	progress.custom-progress-bar::-moz-progress-bar {
		background-color: #000000;
	}

	progress.custom-progress-bar::-ms-fill {
		background-color: #000000;
	}
</style>
