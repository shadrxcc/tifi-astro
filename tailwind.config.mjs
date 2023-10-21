/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Noto Sans"','ui-sans-serif', 'system-ui'],
				'serif': ['"Red Hat Display"','ui-serif', 'Georgia'],
				'mono': ['ui-monospace', 'SFMono-Regular'],
				'display': ['Oswald'],
				'body': ['"Plus Jakarta Sans"'],
				'button': "Inter"
			},
			screens: {
				'2xl': {'max': '1535px'},
				'xl': {'max': '1279px'},
				'lg': {'max': '1023px'},
				'md': {'max': '767px'},
				'sm': {'max': '639px'},
			},
		},
	},
	plugins: [],
})
