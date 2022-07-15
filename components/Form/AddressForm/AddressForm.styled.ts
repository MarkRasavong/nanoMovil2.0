import styled from 'styled-components'

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;

	> div {
		margin-bottom: 1em;
	}

	@media (min-width: 900px) {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		padding: 1em 1em;

		.formBtnBlock {
			grid-column: span 2;
		}
	}
`
export const FormButtonDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 1em;

	button {
		background-color: red;
		width: 100%;
	}

	button:last-child {
		background-color: ${({ theme }) => theme.colors.nanoBlue};
	}

	@media (min-width: 900px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
		margin-left: 10%;
		margin-top: 1em;

		button {
			width: 45%;
		}
	}
`

export const CheckoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 20%;
	padding: 2em;
	background-color: white;
	width: 90%;
	border-radius: 10px;

	.stepr {
		display: hidden;
		padding: 2em, 0, 5em;
		margin-bottom: 2em;
	}

	@media (min-width: 900px) {
		margin-top: 8%;
		width: 60%;

		.stepr {
			padding: 2em, 0, 5em;
			margin-bottom: 2em;
		}
	}
`
