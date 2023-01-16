/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				art: "url('./images/art-background.webp')"
			},
			aspectRatio: {
				a3: '1 / 1.4142'
			}
		}
	},
	plugins: []
};
