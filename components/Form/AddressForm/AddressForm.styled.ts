import styled from 'styled-components'

export const FormContainer = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 50%);
	grid-column-gap: 1em;
	grid-row-gap: 2em;
	padding: 1em 3em;
`
export const FormButtonDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin-left: 10%;
	margin-top: 1em;

	button {
		background-color: red;
		width: 45%;
	}

	button:last-child {
		background-color: ${({ theme }) => theme.colors.nanoBlue};
	}
`

export const CheckoutDiv = styled.div`
	margin-top: 5%;
	padding: 2em;
	background-color: white;
	width: 40%;
	border-radius: 10px;

	.stepr {
		padding: 2em, 0, 5em;
		margin-bottom: 2em;
	}
`
