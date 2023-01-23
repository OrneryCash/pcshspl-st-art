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

<PageTransition>
	<div class="bg-art bg-cover bg-bottom sm:bg-center py-36 sm:py-72 sm:h-96 w-full flex flex-col items-center">
		<Header />
	</div>
	<Gallery {data} />
</PageTransition>