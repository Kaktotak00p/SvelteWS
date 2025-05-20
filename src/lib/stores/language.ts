import { writable } from 'svelte/store';
import { setLanguageTag } from '$lib/paraglide/runtime';

export const currentLang = writable('ua');

export function switchLanguage(lang: 'en' | 'ua') {
  setLanguageTag(lang);
  currentLang.set(lang);
}
