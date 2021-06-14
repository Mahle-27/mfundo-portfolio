const colors = require('tailwindcss/colors')

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,
			trueGray: colors.trueGray,
			warmGray: colors.warmGray,
			indigo: colors.indigo,
			red: colors.red,
			rose: colors.rose,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			green: colors.green,
			lime: colors.lime,
			emerald: colors.emerald,
			blue: colors.blue,
			lightBlue: colors.lightBlue,
			teal: colors.teal,
			cyan: colors.cyan,
			purple: colors.purple,
			violet: colors.violet,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
		},
		extend: {
			fontFamily: {
				header: ['"Dancing Script"'],
				body: ['"Fira Code"'],
				lato: ["Lato"],
			},
			backgroundImage: {
				pattern: `url("/images/webb.png")`,
				facebook: `url("/images/facebook.svg")`,
				linkedin: `url("/images/linkedin.svg")`,
				twitter: `url("/images/twitter.svg")`,
				whatsapp: `url("/images/whatsapp.svg")`,
				github: `url("/images/github.svg")`,
				image: `url("/images/background-image.png")`,
				design: `url("/images/design-unsplash.jpg")`,
				passion: `url("/images/passion-unsplash.jpg")`,
			},
			boxShadow: {
				custom: "inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px 8px -8px rgb(0 0 0 / 30%)",
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms'),],
};
