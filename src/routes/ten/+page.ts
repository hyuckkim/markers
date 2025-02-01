export const prerender = false;

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export async function load({ params }) {
    console.log('SvelteKit load function processed a request.');
    return {
        items: "ten"
    };
}
