/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: {
					1: "#FAFAFF",
					2: "#FEFEFF",
				},

				black: {
					1: "#323233",
				},

				orange: {
					1: "#F14119",
				},
				gray: {
					1: "#7D7D80",
					2: "#323233",
				},
			},
			screens: {
				xs: "480px", // or any width you want for the xs breakpoint
			},
		},
	},
	plugins: [],
};
