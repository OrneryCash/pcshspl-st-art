import { error } from '@sveltejs/kit';
import { art } from '../../../data';

export function load({ params }) {
	const ar = art.find(
		(a) => a.room === parseInt(params.room) && a.number === parseInt(params.number)
	);

	if (!ar) throw error(404);

	return { ar };
}
