/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./src/**/*.{html,js,jsx}",
		"**/*.js",
		"**/*.html",
	],
	theme: {
		extend: {
			colors: {
				primary: "#000",
				secondary: "#fff", 
			}
		},
	},
	plugins: [],
}

