import styled from 'styled-components'

export const FooterDiv = styled.footer`
	position: sticky;
	top: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 5em;
	width: 100%;
	margin-top: 2em;

	h4 {
		font-size: 2rem;
		color: whitesmoke;
		margin: 0;
		font-weight: normal;
		cursor: pointer;
	}
`

export const FooterSocialIcons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em;

	button {
		background-color: inherit;
		border: none;
		cursor: pointer;
	}

	a {
		:not(:last-child) {
			margin-right: 1em;
		}
	}
`
