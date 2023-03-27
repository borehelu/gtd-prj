import styled from "styled-components";

export const SpinnerContainer = styled.div`
	display: flex;
	width: 20%;
	height: 175px;
	margin: 2rem auto;
	align-items: center;
	justify-content: center;
	padding: 30px;
`;

export const Spinner = styled.ul`
	list-style: none;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: loading 1.25s infinite;
`;

export const Square = styled.li`
	width: 10px;
	height: 10px;
	position: absolute;
	border: 2px solid var(--primary-color);
	animation-duration: 1.25s;
	animation-iteration-count: infinite;

	&:nth-child(1) {
		animation-name: loading-1;
	}

	&:nth-child(2) {
		animation-name: loading-2;
	}

	&:nth-child(3) {
		animation-name: loading-3;
	}

	&:nth-child(4) {
		animation-name: loading-4;
	}
`;
