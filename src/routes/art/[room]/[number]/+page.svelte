<script>
	export let data;
	$: room = data.ar.room;
	$: number = data.ar.number;
	const students = [24, 24, 25, 23, 23, 23];
	let previous = '';
	let next = '';
	$: if (room === 1 && number === 1) {
		previous = '';
	} else if (number === 1) {
		previous = `/art/${room - 1}/${students[room - 2]}`;
	} else {
		previous = `/art/${room}/${number - 1}`;
	}
	$: if (room === 6 && number === 23) {
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
			<img class="w-16 sm:w-20" src="/school-logo.webp" alt="PCSHSPL Logo" />
		</a>
	</div>
	<div
		class="flex flex-col items-center md:flex-row md:items-start justify-center gap-8 md:gap-12 mt-10 w-full"
	>
		<div class="flex flex-col items-center w-2/3 md:w-1/3">
			<img class="aspect-square w-full" src={`/room${room}/number${number}.webp`} alt={data.ar.title} />
			<div class="text-gray-500 flex flex-col font-bold text-lg">
				<span>{data.ar.technique}</span>	
				<span>{data.ar.size}</span>
			</div>
		</div>

		<div class="w-3/4 md:w-1/3">
			<div class="flex gap-5 mb-4">
				{#if previous !== ''}
					<a href={previous}>
						<img class="bg-red-400 rounded-full p-3 w-12" src="/arrow_left.svg" alt="Arrow Left" />
					</a>
				{/if}
				{#if next !== ''}
					<a href={next}>
						<img
							class="bg-red-400 rounded-full p-3 w-12"
							src="/arrow_right.svg"
							alt="Arrow Right"
						/>
					</a>
				{/if}
			</div>
			<h1 class="font-bold text-4xl pb-4 border-red-400 border-b-2">{data.ar.title}</h1>
			<h3 class="py-4">{data.ar.description}</h3>
			{#if data.ar.instagram !== ""}
				<a
					class="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-red-400 to-purple-600 p-4 w-max rounded-full"
					href={`https://instagram.com/${data.ar.instagram}`}
					target="_blank"
					rel="noreferrer"
				>
					<img class="w-5" src="/ig_logo_white.svg" alt="IG Logo" />
				</a>
			{/if}
		</div>
	</div>
</div>
