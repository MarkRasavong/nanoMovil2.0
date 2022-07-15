import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	position: fixed;
	z-index: 7;
	height: 5em;
	width: 100%;
	margin: auto;
	//tablet & mobile devices
	@media (max-width: 990px) {
		ul {
			flex-direction: column;
			position: fixed;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0.9);
			backdrop-filter: blur(5px);
			top: 5em;
			left: -100%;
			text-align: center;
			transition: all 0.5s;
		}

		ul li {
			display: block;
			margin: 0;
			padding: 0 0 1.5em 0;
		}

		ul li:nth-child(1) {
			padding-top: 1.5em;
		}
	}

	@media (min-width: 991px) {
		ul li {
			display: inline-block;
			line-height: 3.5em;
			margin-left: 4em;
			font-size: 1.2em;
		}
	}
`

export const NavBarLinks = styled.ul`
	display: flex;
	flex-grow: 1;
	width: 100%;
	margin: auto;
	align-items: center;

	a {
		color: ${({ theme }) => theme.colors.nanoOrange};
		cursor: pointer;
		display: inline-block;
		font-size: 2.2rem;
	}

	@media (min-width: 991px) {
		width: auto;
		justify-content: flex-start;

		a {
			font-size: 1.2rem;
		}
	}
`

export const NavbarLogo = styled.label`
	display: flex;
	margin-top: -1.5em;
	width: 182px;
	height: 94px;

	@media (min-width: 900px) {
		padding: 10px 0 0 30px;
		margin-left: auto;
	}
`

export const MobileMenuButton = styled.button`
	border: none;
	display: flex;
	align-self: center;
	margin: auto 1em;
	background: inherit;
	cursor: pointer;
	//mobile && tablets
	@media (min-width: 990px) {
		display: none;
	}
`

export const IconLinksContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		border: none;
		background-color: inherit;
		border-radius: 100%;
		padding: 0.8em;
		cursor: pointer;
		transition-duration: 0.13s;
		margin-right: 1em;
	}

	//mobile
	@media (max-width: 990px) {
		display: none;
	}

	@media (min-width: 991px) {
		margin-right: auto;
	}
`
export const IcnMobileNavLinks = styled.div`
	display: none;
	//mobile
	@media (max-width: 990px) {
		display: flex;

		button {
			border: none;
			background-color: inherit;
			border-radius: 100%;
			padding: 0.8em;
			cursor: pointer;
			margin-right: 1rem;
			transition-duration: 0.13s;
		}
	}
`
