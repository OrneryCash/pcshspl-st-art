<script>
	import Button from './Button.svelte';
	import Showcase from './Showcase.svelte';
	import { classroom } from './store';
	export let data;

	function handleMessage(event) {
		$classroom.forEach((r) => {
			if (r.room === event.detail.room) {
				r.active = true;
			} else {
				r.active = false;
			}
		});
		classroom.set($classroom);
	}
</script>

<div class="flex flex-col items-center -mt-[5.5rem] sm:-mt-20">
	<div class="grid grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-2 flex-wrap justify-center text-sm sm:text-base">
		{#each $classroom as { room, active } (room)}
			<Button {room} {active} on:message={handleMessage} />
		{/each}
	</div>
	{#each $classroom as { room, active } (room)}
		{#if active}
			<Showcase {room} {data} />
		{/if}
	{/each}
</div>
