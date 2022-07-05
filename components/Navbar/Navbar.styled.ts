import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	display: flex;
	z-index: 7;
	position: fixed;
	height: 5em;
	width: 100%;
	margin: auto;
`

export const NavbarLogo = styled.label`
	display: flex;
	flex-grow: 1;
	margin-top: -2em;
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
	background-color: inherit;
	cursor: pointer;
	//mobile && tablets
	@media (min-width: 990px) {
		display: none;
	}
`
