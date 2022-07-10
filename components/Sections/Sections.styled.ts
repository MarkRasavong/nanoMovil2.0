import styled from 'styled-components'

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin-top: 5em;

	h1 {
		margin-bottom: 1em;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
    */
		margin-top: 28em;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 2em;
		margin-bottom: 2em;

		h1 {
			margin-bottom: 2em;
		}
	}

	@media (min-width: 1025px) and (max-width: 1280px) {
		margin-top: 34em;
		margin-bottom: 2em;

		h1 {
			margin-bottom: 2em;
		}
	}

	@media (min-width: 1281px) {
		margin-bottom: 6em;
	}
`

export const ProductTitle = styled.h1`
	font-size: 3em;
	color: ${({ theme }) => theme.colors.nanoWhite};
	margin-left: 0.3em;
`
export const ProductosSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 10em;
`
