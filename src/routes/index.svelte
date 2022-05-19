<script>
	import { username, questionIdx, score } from '../lib/stores/game.js';
	import { goto } from '$app/navigation';

	const handleSubmit = () => {
		questionIdx.set(0);
		score.set(0);
		goto('/questions');
	};

	$: capitalizedUsername = ($username).toUpperCase();
</script>

<div class="flex flex-col space-y-8">
	<h1 class="text-3xl font-bold underline">The most awesome KAHOOT clone in existence :D</h1>
	<form
		on:submit|preventDefault={() => handleSubmit()}
		class="bg-white flex flex-col space-y-4 p-8 rounded-md"
	>
		<input
			type="text"
			bind:value={$username}
			class="border border-gray-300 px-2 py-4 text-center rounded-md text-black"
			placeholder="Name"
		/>
		<button
			type="submit"
			class="px-2 py-4 bg-black rounded-md hover:scale-105 ease-in-out duration-700"
		>
			Let's go {capitalizedUsername} !
		</button>
	</form>
</div>
