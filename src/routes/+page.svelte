<script>
    import Header from "./Header.svelte";
    import Gallery from "./Gallery.svelte";
</script>

<svelte:head>
    <title>PCSHSPL Y2k Art Street</title>
    <meta name="description" content="PCSHSPL Y2K Street Art">
    <meta name="keywords" content="Y2K, Street Art, PCSHSPL">
    <meta name="author" content="Teerapad Pipadboonyarat">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<div class="bg-art bg-cover py-64 w-full flex flex-col items-center">
    <Header />
    <div class="text-white text-6xl text-left font-bold">
        <h1>PCSHSPL</h1>
        <h1>Y2K Street Art</h1>
    </div>
</div>
<Gallery />