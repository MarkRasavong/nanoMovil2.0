import styled from 'styled-components'

export const HeroSection = styled.section`
	position: relative;
	display: flex;
	justify-content: center;

	.vidBkgContainr {
		position: absolute;
		z-index: -2;
		width: 100%;
		top: 0em;
		left: 0em;
	}

	.vidBkgContainr video {
		width: 100%;
		height: 100vh;
		object-fit: cover;
		min-height: 550px;
	}
`

export const GlassBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 1em;
	height: 22em;
	margin-top: 10em;
	width: 100%;

	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	@media (min-width: 901px) {
		width: 50%;
	}
`

export const HeroLogoDiv = styled.div`
	width: 100%;
	height: 20em;

	> div {
		position: unset !important;
	}

	.heroImg {
		object-fit: contain;
		width: 100% !important;
		position: relative !important;
		height: unset !important;
	}
`

export const Overlay = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	z-index: -1;
	top: 0em;
	left: 0em;
	background: #000000;
	opacity: 0.3;
`
export const HeroTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 1em;

	h2 {
		font-size: 3em;
		color: ${({ theme }) => theme.colors.nanoBlue};
	}

	h6 {
		font-size: 1em;
		color: ${({ theme }) => theme.colors.nanoBlue};
	}

	@media (min-width: 768px) {
		margin-top: 0em;

		h6 {
			font-size: 1.5em;
		}
	}
`
