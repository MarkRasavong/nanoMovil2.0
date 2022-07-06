export interface NanoTheme {
	colors: {
		nanoBlue: string
		nanoOrange: string
		nanoWhite: string
		nanoOrangeHover: string
	}
	fonts: string[]
	fontSize: {
		small: string
		medium: string
		large: string
	}
}

export const theme: NanoTheme = {
	fonts: ['Permanent Marker', 'OpenSans', 'sans-serif', 'cursive'],
	fontSize: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
	colors: {
		nanoBlue: '#0573bd',
		nanoOrange: '#ff6d01',
		nanoWhite: '#fbf6f3',
		nanoOrangeHover: '#cc5802',
	},
}
