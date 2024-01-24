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
			colors: {
				primary: "#bb372f",
				secondary: "#3a3f51",
				"main-sec": "#0D062D",
				success: "#34CAA5",
				error: "#ff1f7d",
				warning: "#f5bf3d",
			},
		},
	},
	plugins: [],
};
export default config;
