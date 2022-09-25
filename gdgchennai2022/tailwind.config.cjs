/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'noise-pattern': "url('/noise-grain.png')"
			}
		}
	},
	plugins: []
};
