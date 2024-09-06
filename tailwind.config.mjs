import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'black': '#10100E',
			},
			backgroundImage: {
				'gradient': 'linear-gradient(to right, #ffffff, #7c7c7c)',
				'gradient-secondary': 'linear-gradient(to right, #9e9e9e, #676767)',
			},
			keyframes: {
				scroll: {
				  '0%': { transform: 'translateX(100%)' },
				  '100%': { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				'scroll': 'scroll 16s linear infinite',
			},
		},
	},
	plugins: [],
}
