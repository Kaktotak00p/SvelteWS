import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
        brandGreen: "#b4ff00",
      },
		}
	},

	plugins: [typography, forms]
} satisfies Config;
