import styled from 'styled-components'

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${({ theme }) => theme.colors.nanoOrange};
	color: ${({ theme }) => theme.colors.nanoWhite};
	width: 50%;
	height: 3em;
	font-size: 1.1em;
	font-family: ${({ theme }) => theme.fonts[0]};
	text-transform: uppercase;

	border: none;
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
		0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	border-radius: 0.5rem;

	:hover {
		background-color: ${({ theme }) => theme.colors.nanoWhite};
	}

	:nth-child(n + 1) {
		margin-top: 1em;
	}

	@media (min-width: 901px) {
		width: 20%;
	}
`
