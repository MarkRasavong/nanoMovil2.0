import styled from 'styled-components'

export const CardContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 275px);
	grid-template-rows: repeat(2, 450px);
	grid-column-gap: 2em;
	grid-row-gap: 6em;

	//320px - 480px device width
	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column;
		grid-row-gap: 1em;

		> div {
			margin-bottom: 1em;
		}
	}

	/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/

	@media (min-width: 481px) and (max-width: 767px) {
		> div {
			margin-bottom: 2em;
		}
	}

	/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/

	@media (min-width: 768px) and (max-width: 1024px) {
		height: 100%;
		display: grid;
		grid-template-columns: repeat(2, 350px);
		grid-template-rows: repeat(1, 580px);
		grid-column-gap: 1.5em;
		grid-row-gap: 1.5em;
	}
`

export const Card = styled.div`
	cursor: pointer;
	width: 275px;
	height: 520px;

	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	:hover {
		background: rgba(255, 255, 255, 0.9);
	}

	@media (min-width: 320px) and (max-width: 480px) {
		width: 285px;
		height: 540px;
		margin: auto;
	}

	@media (min-width: 481px) and (max-width: 767px) {
		/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
    */
		width: 400px;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 350px;
		height: 580px;
	}
`
export const CardImgContainer = styled.div`
	border-radius: 10px;
`
export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1em;

	button {
		align-self: flex-end;
		width: 50%;
		padding: 0.5em;
	}
`
