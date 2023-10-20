/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryorange: "#FF601F",
				primaryblue: '#101828',
				tealbrown: "rgba(255, 77, 0, 0.17)",
				primarygrey: 'rgba(255, 255, 255, 0.21)'
			}
		},
	},
	plugins: [],
}
