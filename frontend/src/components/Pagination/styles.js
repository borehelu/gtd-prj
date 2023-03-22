import styled from "styled-components";

export const PaginationWrapper = styled.nav`
	width: 80%;
	margin: 2rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const PaginationList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 0.7rem;
`;

export const PageListItem = styled.li`
	& button {
		width: 30px;
		height: 30px;
		font-size: 0.925rem;
		color: #555;
		border-radius: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid #aaa;

		&:disabled {
			background-color: #f8f8f8;
			pointer-events: none;
		}
	}

	&.active button {
		background-color: var(--primary-color);
		color: var(--white);
		border: none;
	}
`;
