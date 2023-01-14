<script>
    import Button from "./Button.svelte";
    import Showcase from "./Showcase.svelte";
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
        },
    ]
</script>
<div class="flex flex-col items-center -mt-20">
    <div class="flex flex-row gap-x-4">
        {#each classroom as {room, active} (room)}
            <Button {room} {active} />
        {/each}
    </div>
    <Showcase />
</div>