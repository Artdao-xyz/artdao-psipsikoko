// create a store in svelte
import { writable } from 'svelte/store';

export const zineStore = writable(false);
export const mintingStore = writable(false);
export const scrapbookStore = writable(false);
export const artistBioStore = writable(false);
export const progress = writable(0);