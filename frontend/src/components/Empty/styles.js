import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 1rem;
	margin: 2rem 0;

	& img {
		width: 300px;
	}

	& p {
		font-size: 1rem;
		color: #555;
	}
`;
