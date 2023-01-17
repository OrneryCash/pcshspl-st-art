<script>
	export let data;
	$: room = data.ar.room;
	$: number = data.ar.number;
	const students = [24, 24, 25, 24, 23, 24];
	let previous = '';
	let next = '';
	$: if (room === 1 && number === 1) {
		previous = '';
	} else if (number === 1) {
		previous = `/art/${room - 1}/${students[room - 2]}`;
	} else {
		previous = `/art/${room}/${number - 1}`;
	}
	$: if (room === 6 && number === 24) {
		next = '';
	} else if (students[room - 1] === number) {
		next = `/art/${room + 1}/1`;
	} else {
		next = `/art/${room}/${number + 1}`;
	}
</script>

<div>
	<div class="w-full flex justify-center bg-red-400 py-4">
		<a href="/">
			<h1 class="text-black">LOGO</h1>
		</a>
	</div>
	<div class="flex justify-center gap-12 mt-10 w-full">
		<img class="aspect-a3 w-96" src={`/room${room}/number${number}.webp`} alt={data.ar.title} />
		<div class="w-1/3">
			<div class="flex gap-5 mb-4">
                {#if previous !== ''}
                    <a href={previous}>
                        <img class="bg-red-400 rounded-full p-3 w-12" src="/arrow_left.svg" alt="Arrow Left" />
                    </a>
                {/if}
                {#if next !== ''}
                    <a href={next}>
                        <img class="bg-red-400 rounded-full p-3 w-12" src="/arrow_right.svg" alt="Arrow Right" />
                    </a>
                {/if}
			</div>
			<h1 class="font-bold text-4xl pb-4 border-red-400 border-b-2">{data.ar.title}</h1>
			<h3 class="py-4">{data.ar.description}</h3>
			<a
				class="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-red-400 to-purple-600 p-4 w-max rounded-full"
				href="https://instagram.com/instagram"
				target="_blank"
				rel="noreferrer"
			>
				<img class="w-5" src="/ig_logo_white.svg" alt="IG Logo" />
			</a>
		</div>
	</div>
</div>
