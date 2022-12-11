/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		require("path").join(
			require.resolve("@skeletonlabs/skeleton"),
			"../**/*.{html,js,svelte,ts}"
		),
	],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@skeletonlabs/skeleton/tailwind/theme.cjs"),
	],
};
