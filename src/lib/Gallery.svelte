<script>
	import Button from './Button.svelte';
	import Showcase from './Showcase.svelte';
	let classroom = [
		{
			room: 1,
			active: true
		},
		{
			room: 2,
			active: false
		},
		{
			room: 3,
			active: false
		},
		{
			room: 4,
			active: false
		},
		{
			room: 5,
			active: false
		},
		{
			room: 6,
			active: false
		}
	];
	export let data;

	function handleMessage(event) {
		classroom.forEach((r) => {
			if (r.room === event.detail.room) {
				r.active = true;
			} else {
				r.active = false;
			}
		});
		classroom = classroom;
	}
</script>

<div class="flex flex-col items-center -mt-20">
	<div class="flex flex-row gap-x-4 gap-y-4 flex-wrap justify-center">
		{#each classroom as { room, active } (room)}
			<Button {room} {active} on:message={handleMessage} />
		{/each}
	</div>
	{#each classroom as { room, active } (room)}
		{#if active}
			<Showcase {room} {data} />
		{/if}
	{/each}
</div>