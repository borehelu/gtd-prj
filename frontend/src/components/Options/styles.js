import styled from "styled-components";

export const OptionsContainer = styled.div`
	margin-left: auto;
	display: flex;
	column-gap: 0.6rem;
	position: relative;

	& button {
		color: #666;
	}
`;

export const OptionsMenu = styled.div`
	width: 92px;
	position: absolute;
	top: 1.4rem;
	right: 0;
	background-color: #fff;
	box-shadow: 1px 2px 3px -1px rgba(0, 0, 0, 0.1);
	border: 1px solid #ddd;
	border-radius: 9px;
	z-index: 3;
	padding: 0.4rem 1rem;

	& button {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		column-gap: 4px;
		font-size: 0.8rem;
	}
`;
