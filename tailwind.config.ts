import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",

	theme: {
		extend: {
			keyframes: {
				loadspin: {
					"100%": {
						transform: "rotate(360deg)",
					},
				},
			},
			animation: {
				loadspin: "loadspin 1.2s linear infinite",
			},
			colors: {
				primary: "#bb372f",
				secondary: "#3a3f51",
				"main-sec": "#0D062D",
				success: "#34CAA5",
				error: "#ff1f7d",
				warning: "#f5bf3d",
				light: "#78828A",
				"soft-light": "#DADDDD",
				header: "#26282c",
				"soft-border": "#ebecf2",
				"soft-bg": "#f7f8fa",
				"trend-down": "#ed544e",
			},

			fontFamily: {
				jakarta: ["Plus Jakarta Sans", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
