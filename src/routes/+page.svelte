<script>
	import Header from '../lib/Header.svelte';
	import Gallery from '../lib/Gallery.svelte';
	import PageTransition from '../lib/PageTransition.svelte';
	export let data;
</script>

<svelte:head>
	<title>PCSHSPL Y2K Street Art</title>
	<meta name="description" content="PCSHSPL Y2K Street Art" />
	<meta name="keywords" content="Y2K, Street Art, PCSHSPL" />
	<meta name="author" content="Teerapad Pipadboonyarat" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="google-site-verification" content="p0HTzP8dBWOo-_zgLmmo3l9O7u4QCBo-YZILm0I7gdo" />
	<meta charset="utf-8" />
</svelte:head>

<PageTransition>
	<div class="bg-art bg-cover py-64 w-full flex flex-col items-center">
		<Header />
		<div class="text-white text-6xl text-left font-bold">
			<h1>PCSHSPL</h1>
			<h1>Y2K Street Art</h1>
		</div>
	</div>
	<Gallery {data} />
</PageTransition>