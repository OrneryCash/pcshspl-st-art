<script>
	export let data;
	$: room = data.ar.room;
	$: number = data.ar.number;
	const students = [24, 24, 25, 23, 23, 23, 1];

	function generateURL(room, number) {
		return `/art/${room}/${number}`;
	}

	let previous = '';
	let next = '';

	$: {
		if (room === 1 && number === 1) {
			previous = '';
		} else if (number === 1) {
			previous = generateURL(room - 1, students[room - 2]);
		} else {
			previous = generateURL(room, number - 1);
		}
		if (room === 7 && number === 1) {
			next = '';
		} else if (students[room - 1] === number) {
			next = generateURL(room + 1, 1);
		} else {
			next = generateURL(room, number + 1);
		}
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
		<figure class="flex flex-col items-center w-3/4 md:w-1/3">
			<img
				class="aspect-square w-full"
				src={`/art/room${room}/number${number}.webp`}
				alt={data.ar.title}
			/>
			<figcaption class="text-gray-500 flex flex-col font-bold text-sm sm:text-lg">
				<span>{data.ar.technique}</span>
				<span>{data.ar.size}</span>
			</figcaption>
		</figure>

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
			<h1 class="font-bold text-3xl sm:text-4xl pb-4 border-red-400 border-b-2">{data.ar.title}</h1>
			<h3 class="py-4 text-base sm:text-lg">{data.ar.description}</h3>
			<div class="flex items-center gap-5 mb-4">
				{#if data.ar.instagram !== ''}
					<a href={`https://instagram.com/${data.ar.instagram}`} target="_blank" rel="noreferrer">
						<img
							class="rounded-full w-16 sm:w-20 border-red-400 border-2"
							src={`/artists/room${room}/number${number}.webp`}
							alt={`${data.ar.firstName} ${data.ar.lastName}`}
						/>
					</a>
				{:else}
					<img
						class="rounded-full w-16 sm:w-20 border-red-400 border-2"
						src={`/artists/room${room}/number${number}.webp`}
						alt={`${data.ar.firstName} ${data.ar.lastName}`}
					/>
				{/if}
				<p class="text-base sm:text-lg">{data.ar.firstName} {data.ar.lastName}</p>
			</div>
		</div>
	</div>
</div>
