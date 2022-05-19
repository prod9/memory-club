<script>
	import '../app.css';
	import { onMount } from 'svelte';

	$: rotation = 0;
	$: translateX = 0;
	$: translateY = 0;
	$: style = `transform: translateY(${translateY}px) translateX(${translateX}px) rotate(${rotation}deg)`;

	const toRadian = Math.PI / 180;
	onMount(() => {
		const stepRotation = () => {
			rotation = (rotation + 0.25) % 360;
			translateX = 20 * Math.sin(rotation * toRadian);
			translateY = 20 * Math.cos(rotation * toRadian);
			setTimeout(stepRotation, 50);
		};
		setTimeout(stepRotation, 50);
	});
</script>

<div class="flex justify-center h-screen items-center bg-primary w-full flex-col">
	<div class="rotate-container">
		<div class="circle-bg" {style} />
		<div class="square-bg" {style} />
	</div>
	<div class="z-10">
		<slot />
	</div>
</div>

<style>
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	/* .circle-bg {
		animation: rotate 5s infinite;
	}

	.rotate-container {
		animation: rotate 10s infinite;
	} */
</style>
