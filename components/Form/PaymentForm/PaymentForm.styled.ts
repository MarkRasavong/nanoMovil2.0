import styled from 'styled-components'

export const PayButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin-left: 10%;
	margin-top: 1em;

	button {
		background-color: red;
		width: 45%;
		color: white;
		font-family: ${({ theme }) => theme.fonts[0]};
	}

	button:last-child {
		background-color: ${({ theme }) => theme.colors.nanoBlue};
	}
`
