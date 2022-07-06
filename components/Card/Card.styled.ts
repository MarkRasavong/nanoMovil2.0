import styled from 'styled-components'

export const CardContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 275px);
	grid-template-rows: repeat(2, 450px);
	grid-gap: 2em;

	//320px - 480px device width
	@media (min-width: 320px) and (max-width: 480px) {
		display: flex;
		flex-direction: column;

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
		display: grid;
		grid-template-columns: repeat(2, 350px);
		grid-template-rows: repeat(2, 400px);
		grid-gap: 1.5em;
	}
`

export const Card = styled.div`
	width: 275px;
	height: 450px;
	padding: 1.5em;

	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	@media (min-width: 320px) and (max-width: 480px) {
		width: 285px;
		height: 450px;
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
		height: 400px;
	}
`
