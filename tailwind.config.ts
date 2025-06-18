import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				// “font-myfont” → uses the “Craftwork Grotesk” face, falling back to sans-serif
				Craftwork_Grotesk: ['"Craftwork Grotesk"'],
				Inter: ['"Inter"'],
				caveat: ['"Caveat"', 'cursive'],
			  },
		},
            fontWeight: {
                normal: '400',
				medium: '500',
				semibold: '600',
                bold: '700',
				heavy: '800',
                black: '900',
            }
	},

	plugins: [typography, forms]
} satisfies Config;
