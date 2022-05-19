<script>
	import { score } from '../lib/stores/game.js';
	import { playApplauseSound } from '../lib/sound';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		playApplauseSound();
	});

	const goToMainPage = () => {
		goto('/');
	};
</script>

<div class="flex space-y-8 justify-center items-center flex-col relative">
  <div class="firework absolute z-0 left-1/2 -translate-x-1/2">
    <div class="before"></div>
    <div class="after"></div>
  </div>
	<p class="text-8xl">Congratulations!</p>
  <p class="text-4xl">You got {$score} points!</p>
  <button type="button" class="bg-black rounded-md py-2 px-4 w-fit" on:click={() => goToMainPage()}
    >BACK TO MAIN</button
  >
</div>
