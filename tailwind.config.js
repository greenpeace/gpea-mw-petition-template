module.exports = {
	content: [
		'./apps/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./containers/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
	daisyui: {
		themes: [
			{
				gpea: {
					primary: '#66CC00',
					secondary: '#FF8100',
					accent: '#85D633',
					neutral: '#000000',
					'base-100': '#FFFFFF',
					info: '#108EE9',
					success: '#66CC00',
					warning: '#F0AF23',
					error: '#FF3333'
				}
			}
		]
	}
};
