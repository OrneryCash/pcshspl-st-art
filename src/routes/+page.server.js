import { art } from "./data";

export function load() {
	return {
		details: art.map((a) => ({
			room: a.room,
			number: a.number,
			image: `/room${a.room}/number${a.number}.webp`
		}))
	}
}