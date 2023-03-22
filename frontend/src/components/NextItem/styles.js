import styled from "styled-components";

export const Card = styled.div`
	background-color: var(--white);
	margin: 1rem 0;
	border: 1px solid #efefef;
	box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.15),
		2px 0 3px -2px rgba(0, 0, 0, 0.15);
	border-radius: 6px;
	padding: 0.7rem 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 0.1rem;

	& {
		.top {
			width: 100%;
			display: flex;
			align-items: flex-end;
			column-gap: 1rem;
			margin-bottom: 0.3rem;
		}

		.item_name {
			font-weight: 700;
			color: #333;
		}

		.item_description {
			color: #555;
			font-size: 0.9rem;
			max-width: 55ch;
			margin-bottom: 0.5rem;
		}

		.bottom {
			display: flex;
			column-gap: 0.5rem;
		}

		.status {
			display: flex;
			border-radius: 4px;
			column-gap: 0.5rem;
			align-items: center;
			padding: 0.1rem 0.4rem;
			font-size: 12px;
			color: var(--white);

			& .dot {
				width: 4px;
				height: 4px;
				border-radius: 6px;
			}

			&.completed {
				background-color: var(--completed-light);
				color: var(--completed);

				&.dot {
					background-color: var(--completed);
				}
			}

			&.inprogress {
				background-color: var(--in-progress-light);
				color: var(--in-progress);

				&.dot {
					background-color: var(--in-progress);
				}
			}

			&.pending {
				background-color: var(--pending-light);
				color: var(--pending);

				&.dot {
					background-color: var(--pending);
				}
			}
		}
	}
`;
