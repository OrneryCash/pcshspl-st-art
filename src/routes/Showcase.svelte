<script>
    import { fly } from "svelte/transition";
    export let room
    export let data;
</script>

<div class="grid grid-cols-4 mt-6 w-full place-items-center gap-y-4">
    {#each data.details as detail }
        {#if detail.room === room}
            <a href={`/art/${detail.room}/${detail.number}`}>
                <img class="aspect-a3 w-40" src={detail.image} alt={`Class ${detail.room}`} in:fly="{{y: 200, duration:2000}}"/>
            </a>
        {/if}
    {/each}
</div>