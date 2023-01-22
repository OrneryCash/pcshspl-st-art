<script>
	import Header from '../lib/Header.svelte';
	import Gallery from '../lib/Gallery.svelte';
	import PageTransition from '../lib/PageTransition.svelte';
	export let data;
</script>

<svelte:head>
	<title>PCSHSPL Street Art</title>
	<meta name="description" content="PCSHSPL Street Art" />
	<meta name="keywords" content="Y2K, Street Art, PCSHSPL" />
	<meta name="author" content="Teerapad Pipadboonyarat" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta charset="utf-8" />
</svelte:head>

{#if false}
<PageTransition>
	<div class="bg-art bg-cover bg-bottom sm:bg-center py-52 sm:py-72 sm:h-96 w-full flex flex-col items-center">
		<Header />
	</div>
	<Gallery {data} />
</PageTransition>
{:else}
<div class="bg-gray-800 h-screen w-full flex flex-col gap-4 justify-center items-center text-white">
	<h1 class="text-white text-5xl md:text-8xl sm:text-6xl font-bold">Coming Soon</h1>
	<p class="text-base sm:text-lg md:text-xl">27 January 2023</p>
</div>
{/if}