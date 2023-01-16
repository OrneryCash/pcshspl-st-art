<script>
    import { fade } from "svelte/transition";
    import { blur } from "svelte/transition";
</script>

<div transition:blur="{{amount: 10, duration: 1000}}">
    <slot />
</div>