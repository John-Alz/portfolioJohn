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
			'violet': '#763CAC',
			'blackBg': '#1E1E1E',
		},
		// fontSize: {
		// 	'lg': '20px',
		// 	'xl': '24px',
		// 	'9xl': '140px'
		// }

	},
	plugins: [],
}
