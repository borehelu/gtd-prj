import styled from "styled-components";

export const NextItemContainer = styled.div`
	background-color: var(--white);
	margin: 1rem 0;
	border: 1px solid #efefef;
	box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.15),
		2px 0 3px -2px rgba(0, 0, 0, 0.15);
	border-radius: 6px;
	padding: 0.7rem 1.5rem;
`;

export const Heading = styled.div`
	display: flex;
	align-items: flex-end;
	column-gap: 1rem;
	margin-bottom: 0.2rem;
`;

export const Name = styled.h2`
	font-size: 0.975rem;
	color: #444;
	font-weight: 600;
`;

export const Description = styled.p`
	font-size: 0.925rem;
	color: #555;
`;

export const Footer = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.5rem;
`;

export const Priority = styled.div`
	font-size: 0.6rem;
`;

export const Status = styled.div`
	display: flex;
	align-items: center;
	column-gap: 0.3rem;
	font-size: 0.8rem;
	padding: 1px 8px;
	& .dot {
		background-color: #ddd;
		width: 4px;
		height: 4px;
		border-radius: 6px;
	}
	&.completed {
		background-color: var(--completed-light);
		color: var(--completed);

		& .dot {
			background-color: var(--completed);
		}
	}

	&.inprogress {
		background-color: var(--in-progress-light);
		color: var(--in-progress);

		& .dot {
			background-color: var(--in-progress);
		}
	}

	&.pending {
		background-color: var(--pending-light);
		color: var(--pending);

		& .dot {
			background-color: var(--pending);
		}
	}
`;

export const DueDate = styled.div`
	margin-top: 0.7rem;
	display: inline-flex;
	align-items: center;
	column-gap: 0.3rem;
	font-size: 0.725rem;
	background-color: var(--pending-light);
	padding: 2px 8px;
	border-radius: 1rem;
	color: #555;
`;
