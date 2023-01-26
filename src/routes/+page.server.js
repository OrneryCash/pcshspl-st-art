import { art } from './data';

export function load() {
	return {
		details: art.map((a) => ({
			room: a.room,
			number: a.number,
			title: a.title,
			image: `/art/room${a.room}/number${a.number}.webp`
		}))
	};
}
