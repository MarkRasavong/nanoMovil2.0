import styled from 'styled-components'

export const SelectContainer = styled.div`
	width: 100%;
	position: relative;
	height: 50px;
	overflow: hidden;
`

export const SelectLabel = styled.label`
	position: absolute;
	bottom: 0px;
	left: 0%;
	width: 100%;
	height: 100%;
	pointer-events: none;
	border-bottom: 1px solid #aaa;

	::after {
		content: '';
		position: absolute;
		left: 0px;
		bottom: -1px;
		width: 100%;
		height: 100%;
		border-bottom: 3px solid #5fa8d3;
		transform: translateX(-100%);
		transition: all 0.3 ease;
	}
`

export const SelectInput = styled.select`
	width: 100%;
	height: 100%;
	padding-top: 20px;
	border: none;
	outline: none;

	//when you click and input has a value
	:focus + label span,
	:valid + label span {
		transform: translateY(-150%);
		font-size: 14px;
		color: #5fa8d3;
	}

	:focus + label::after,
	:valid + label::after {
		transform: translateX(0%);
	}
`

export const PlaceholderSpan = styled.span`
	position: absolute;
	bottom: 5px;
	left: 0px;
	transition: all 0.3s ease;
	color: #aaa;
	font-family: ${({ theme }) => theme.fonts[2]};
`
