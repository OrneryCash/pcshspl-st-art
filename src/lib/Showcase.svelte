<script>
	import { fly } from 'svelte/transition';
	export let room;
	export let data;
</script>

<div
	class="whitespace-nowrap overflow-x-scroll overflow-y-hidden snap-mandatory snap-x sm:snap-none sm:grid sm:grid-cols-4 mt-6 w-full sm:place-items-center"
>
	{#each data.details as detail}
		{#if detail.room === room}
			<a class="inline-block snap-center sm:snap-align-none" href={`/art/${detail.room}/${detail.number}`}>
				<img
					class="aspect-square w-full"
					src={detail.image}
					alt={detail.title}
					in:fly={{ y: 200, duration: 2000 }}
				/>
			</a>
		{/if}
	{/each}
</div>
