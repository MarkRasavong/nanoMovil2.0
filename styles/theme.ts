export interface NanoTheme {
	color?: {
		nanoColor?: string
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
}
