export const prerender = false;

export async function load({ params }) {
    console.log('SvelteKit load function processed a request.');
    return {
        items: "ten"
    };
}
