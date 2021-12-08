module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		boxShadow: {
			100: "0px 4px 4px rgba(24, 137, 250, 0.2)",
			200: "0px 4px 20px rgba(24, 137, 250, 0.25)",
			300: "0px 4px 14px rgba(80, 64, 149, 0.25)",
		},
		extend: {
			colors: {
				primary: {
					400: "#2f76be",
					500: "#0D1D66",
					600: "#1A3459",
					bg: "#f4f4f4",
					inputBorder: "#CCD2E3",
				},
				gray: {
					100: "#F4F4F4",
				},
				collection: {
					ash: "#767A8F",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
