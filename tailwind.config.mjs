/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'white': '#FFFFFF',
			'black': '#000000',
			'blackAbout': '#141414',
			'grayv1': '#C4C4C4',
			'grayv2': '#808080',
			'grayText': '#A6A6A6',
			'violet': '#763CAC',
			'blackBg': '#1E1E1E',
			'green': '#b7e4c7',
		},
		// fontSize: {
		// 	'lg': '20px',
		// 	'xl': '24px',
		// 	'9xl': '140px'
		// }

	},
	plugins: [],
}
