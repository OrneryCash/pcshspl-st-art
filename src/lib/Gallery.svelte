<script>
	import Button from './Button.svelte';
	import Showcase from './Showcase.svelte';
	import { classroom } from './store';
	export let data;
	import { setContext } from 'svelte';

	function handleMessage(event) {
		$classroom.forEach((r) => {
			if (r.room === event.room) {
				r.active = true;
			} else {
				r.active = false;
			}
		});
		classroom.set($classroom);
	}

	setContext('handleMessage', handleMessage);
</script>

<div class="flex flex-col items-center -mt-[5.25rem] sm:-mt-20">
	<div class="grid grid-cols-4 sm:grid-cols-7 gap-x-3 gap-y-2 justify-center text-sm sm:text-base">
		{#each $classroom as { room, active } (room)}
			<Button {room} {active} />
		{/each}
	</div>
	{#each $classroom as { room, active } (room)}
		{#if active}
			<Showcase {room} {data} />
		{/if}
	{/each}
</div>
