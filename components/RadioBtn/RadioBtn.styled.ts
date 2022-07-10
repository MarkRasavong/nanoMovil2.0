import styled from 'styled-components'

export const RadioGroup = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin: 1em 0 2em 0em;

	label {
		font-family: ${({ theme }) => theme.fonts[0]};
		font-size: 1em;
		color: ${({ theme }) => theme.colors.nanoWhite};
	}

	div:not(:last-child) {
		margin-right: 1em;
	}
`
export const Radio = styled.input`
	margin-right: 1em;
	cursor: pointer;

	border: 0px;
	height: 1.5em;

	transform: scale(2);
`
