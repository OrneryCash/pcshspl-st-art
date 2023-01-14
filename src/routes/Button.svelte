<script>
    export let room
    export let active
</script>
<button class={`${active && "bg-red-400 text-black"} py-3 px-6 rounded-full border-red-400 text-white border-2`}>6/{room}</button>