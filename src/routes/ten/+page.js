export const prerender = false;
import { fail } from '@sveltejs/kit';

export const actions = {
    get: async ({ cookies, request }) => {
        try{
            return {
                number: 10,
            };
        }
        catch (error){
            return fail(500, 'Failed to delete item.')
        }
    }
}