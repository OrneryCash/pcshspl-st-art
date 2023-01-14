<script>
    export let room
    export let active

    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    function sendData() {
        dispatch('message', {
            room: room
        })
    }
</script>

<button class={`${active && "bg-red-400 text-black"} py-3 px-6 rounded-full border-red-400 text-white border-2`} on:click={sendData}>6/{room}</button>