import { strategies } from '$lib/stores/topics.js';
import { get } from 'svelte/store';

/** @type {import('./$types').EntryGenerator} */
export function entries() {
    const allTopics = get(strategies);
    return allTopics.map(topic => ({ id: topic.id }));
}

export const prerender = true;