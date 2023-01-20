<script>
	import { fly } from 'svelte/transition';
	export let room;
	export let data;
</script>

<div
	class="whitespace-nowrap overflow-auto sm:grid sm:grid-cols-5 mt-6 w-full sm:place-items-center"
>
	{#each data.details as detail}
		{#if detail.room === room}
			<a class="inline-block" href={`/art/${detail.room}/${detail.number}`}>
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
