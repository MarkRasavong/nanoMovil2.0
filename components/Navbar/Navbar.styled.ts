import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	background: blue;
	display: flex;
	position: fixed;
	height: 4em;
	width: 100%;
	margin: auto;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
		rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
`

export const NavbarLogo = styled.label`
	display: flex;
	flex-grow: 1;

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
