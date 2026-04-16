import { get } from 'svelte/store';
import { strategies } from '$lib/stores/topics.js';

/**
 * SvelteKit load function — runs before the page renders.
 * @param {{ params: { id: string } }} context
 * @returns {{ strategy: import('$lib/stores/topics.js').SRLItem }}
 */
export function load({ params }) {
    const all = get(strategies);
    const strategy = all.find(s => s.id === params.id);

    if (!strategy) {
        throw new Error(`Strategy "${params.id}" not found`);
    }

    return { strategy };
}