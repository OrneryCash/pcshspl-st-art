<script>
	export let room;
	export let active;

	import { getContext } from 'svelte';

	const handleMessage = getContext("handleMessage")
	function sendData() {
		handleMessage({room: room})
	}
</script>

<button
    class="py-1.5 sm:py-3 px-4 sm:px-6 rounded-full border-red-400 text-white border-2"
    class:bg-red-400={active}
    on:click={sendData}
>
    {room === 7 ? 'T.' : `6/${room}`}
</button>
