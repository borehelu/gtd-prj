import styled from "styled-components";

export const ButtonGroup = styled.div`
	display: flex;
	justify-content: flex-end;
	column-gap: 1rem;

	& button {
		border: none;
		padding: 0.375rem 1.5rem;
		background-color: #f7f7f7;
		color: #999;
		border-radius: 0.125rem;
		margin: 1.5rem 0;
		cursor: pointer;
		font-weight: 700;
		&.primary {
			background-color: var(--primary-color);
			color: #fff;
		}
	}
`;

export const NewContext = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	background-color: #f7f7f7;
	padding: 0.5rem 1rem;
	border: 1px solid #ddd;
	border-radius: 8px;

	& .top {
		display: flex;
		justify-content: space-between;
		color: #555;
		font-size: 0.9rem;

		& button {
			font-size: 1.25rem;
		}
	}

	& .context-form {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		margin-bottom: 0.5rem;
		height: 0;
		overflow: hidden;
		transition: height 4s ease-in-out;
	}

	& .context-form.show {
		height: auto;
	}
	& input {
		width: 60%;
		height: 40px;
		border-radius: 4px;
		background-color: #f7f7f7;
		font-size: 14px;
		display: block;
		border: none;
		border-radius: 2px;
		padding: 0.5rem 1rem;
		border-bottom: 2px solid var(--primary-color);

		&:focus {
			outline: none;
			border-bottom: 2px solid var(--primary-color);
		}
	}

	& button {
		color: #333;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 0.5rem;
		font-size: 0.9rem;
		border-radius: 4px;
	}
`;
