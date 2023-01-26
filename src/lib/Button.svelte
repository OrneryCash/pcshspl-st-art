<script>
	export let room;
	export let active;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	function sendData() {
		dispatch('message', {
			room: room
		});
	}
</script>

{#if room === 7}
	<button
		class={`${
			active && 'bg-red-400'
		} py-1.5 sm:py-3 px-5 sm:px-6 rounded-full border-red-400 text-white border-2`}
		on:click={sendData}>T.</button>
{:else}
	<button
		class={`${
			active && 'bg-red-400'
		} py-1.5 sm:py-3 px-5 sm:px-6 rounded-full border-red-400 text-white border-2`}
		on:click={sendData}>6/{room}</button
	>
{/if}