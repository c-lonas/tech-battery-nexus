/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: [
		'./src/**/*.{astro,html,js,md,ts}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			slate: colors.slate,
			cyan: colors.cyan,
			sky: colors.sky,
			midnight: {
			  100: '#CCE6F0',
			  200: '#B3CCD7',
			  300: '#99B2BE',
			  400: '#8098A5',
			  500: '#667E8C',
			  600: '#4D6473',
			  700: '#334552',
			  800: '#1A2631',
			  900: '#030A0E',
			},
			aqua: {
			  100: '#CCFFFF',
			  200: '#99FBEF',
			  300: '#66E7E0',
			  400: '#33D3D4',
			  500: '#00BFC8',
			  600: '#00CAC6',
			  700: '#00B5B6',
			  800: '#00A0A6',
			  900: '#008B96',
			},
			gold: {
			  100: '#FFFCDF',
			  200: '#FFF6A6',
			  300: '#FFF07A',
			  400: '#FFEA4D',
			  500: '#FFDB00',
			  600: '#ECC300',
			  700: '#D9AC00',
			  800: '#BF9400',
			  900: '#A67C00',
			},
			green: {
				100: '#E6F4EA',
				200: '#CDE9D6',
				300: '#B3DFC1',
				400: '#99D4AC',
				500: '#80CA97',
				600: '#66BF82',
				700: '#4DB56D',
				800: '#33AA58',
				900: '#1A9F43',
			  },
			red: {
				100: '#FDEDEC',
				200: '#FBD6D6',
				300: '#F9BFBF',
				400: '#F7A9A9',
				500: '#F59292',
				600: '#F37C7C',
				700: '#F16565',
				800: '#EF4E4E',
				900: '#ED3838',
			},
			orange: {
				100: '#FFF5E6',
				200: '#FFEACC',
				300: '#FFDFB3',
				400: '#FFD599',
				500: '#FFCB80',
				600: '#FFC166',
				700: '#FFB74D',
				800: '#FFAC33',
				900: '#FFA21A',
			},
			purple: {
				100: '#F3E6FA',
				200: '#E6CDF5',
				300: '#D9B4F0',
				400: '#CC9BEB',
				500: '#BF82E6',
				600: '#B269E1',
				700: '#A650DC',
				800: '#9937D7',
				900: '#8C1ED2',
			},
			// gray: {
			// 	100: '#F5F7F8',
			// 	200: '#E6ECEF',
			// 	300: '#D8E1E6',
			// 	400: '#C9D6DD',
			// 	500: '#BBCBD4',
			// 	600: '#ACBFCB',
			// 	700: '#9EB4C2',
			// 	800: '#8FA9B9',
			// 	900: '#809EB0',
			// },
		},
		extend: {
			backgroundImage: {
				'hero': "url('/src/assets/images/common/backgrounds/3.png')"
			},
			
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
