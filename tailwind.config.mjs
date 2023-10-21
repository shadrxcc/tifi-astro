/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryorange: "#FF601F",
				primaryblue: '#101828',
				tealbrown: "rgba(255, 77, 0, 0.17)",
				primarygrey: 'rgba(255, 255, 255, 0.21)'
=======
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
>>>>>>> 3ff72c47f52b4d6d86455737dcca765559b3f75f
			}
		},
	},
	plugins: [],
<<<<<<< HEAD
}
=======
})
>>>>>>> 3ff72c47f52b4d6d86455737dcca765559b3f75f
