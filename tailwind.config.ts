import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				// “font-myfont” → uses the “Craftwork Grotesk” face, falling back to sans-serif
				myfont: ['"Craftwork Grotesk"', 'sans-serif'],
				Inter: ['"Inter"', 'sans-serif'],
			  },
		}
	},

	plugins: [typography, forms]
} satisfies Config;
