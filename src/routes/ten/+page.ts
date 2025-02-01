export const prerender = false;

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return { number: 10 };
	error(404, 'Not found');
};