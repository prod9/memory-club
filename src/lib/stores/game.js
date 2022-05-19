import { writable } from 'svelte/store';

// game init
export const username = writable('player');

// game state
export const score = writable(0);
export const questionIdx = writable(0);
