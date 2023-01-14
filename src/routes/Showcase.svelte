<script>
    import { fly } from "svelte/transition";
    export let room
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
</script>

<div class="grid grid-cols-4 mt-6 w-full place-items-center gap-y-4">
    {#each number as num}
        <img class="aspect-a3 w-40" src={`/class${room}.webp`} alt={`Class ${room}`} in:fly="{{y: 200, duration:2000}}"/>
    {/each}
</div>