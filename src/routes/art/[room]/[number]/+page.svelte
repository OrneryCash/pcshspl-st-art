<script>
	export let data;
</script>

<div>
    <div class="w-full flex justify-center bg-red-400 py-4">
        <a href="/">
            <h1 class="text-black">LOGO</h1>
        </a>
    </div>
    <div class="flex justify-center gap-12 mt-10 w-full">
        <img class="aspect-a3 w-96" src={`/room${data.ar.room}/number${data.ar.number}.webp`} alt={data.ar.title}/>
        <div class="w-1/3">
            <h1 class="font-bold text-4xl pb-4 border-red-400 border-b-2">{data.ar.title}</h1>
            <h3 class="py-4">{data.ar.description}</h3>
            <a class="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-red-400 to-purple-600 p-4 w-max rounded-full" href="https://instagram.com/instagram" target="_blank" rel="noreferrer">
                <img class="w-5" src="/ig_logo_white.svg" alt="IG Logo">
            </a>                
        </div>
    </div>
</div>
