// create a store in svelte
import { writable } from 'svelte/store';

export const mintingStore = writable(false);
export const scrapbookStore = writable(false);
export const artistBioStore = writable(false);
