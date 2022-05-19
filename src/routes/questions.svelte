<script>
	import { gameModel } from '../lib/model';
	import { goto } from '$app/navigation';
	import { username, score, questionIdx } from '../lib/stores/game';
	import { playCorrectSound, playWrongSound, playApplauseSound } from '../lib/sound';

	$: question = gameModel.questions[$questionIdx];

	const choiceColors = ['#ff4900', '#79d246', '#549ed6', '#ff66c4'];

	const selectChoice = (choice) => {
		if (choice.is_answer) {
			playCorrectSound();
			score.update((s) => s + 10);
		} else {
			playWrongSound();
		}

		const nextIdx = $questionIdx + 1;
		if (nextIdx < gameModel.questions.length) {
			questionIdx.update((idx) => idx + 1);
		} else {
      playApplauseSound();
			goto('/summary');
		}
	};
</script>

<div>
	{$username}: {$score} Points
</div>

<div class="flex flex-col space-y-8 container mx-auto w-full">
	<!-- Question -->
	<h1 class="text-6xl">{question.title}</h1>
	<div class="w-full">
		{#if question.media_type == 'video'}
			<video controls autoplay class="aspect-video bg-black w-full">
				<source src={question.media_url} type="video/mp4" />
			</video>
		{:else}
			<img
				src={question.media_url}
				alt="Photo of the Person"
				class="aspect-video h-68 bg-transparent w-full"
			/>
		{/if}
	</div>

	<!-- Choices -->
	<section>
		<div class="grid grid-cols-2 gap-8">
			{#each question.choices as choice, choiceIdx}
				<button
					type="button"
					id={`choice${choiceIdx}`}
					on:click={() => selectChoice(choice)}
					class="p-4 text-bold flex justify-center items-center text-lg rounded-md hover:scale-105 ease-in-out duration-500"
					style="background-color: {choiceColors[choiceIdx]};"
				>
					{choice.description}
				</button>
			{/each}
		</div>
	</section>
</div>
