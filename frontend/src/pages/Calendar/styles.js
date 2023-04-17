import styled from "styled-components";

export const Main = styled.main`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: #f7f7f7;
`;

export const Week = styled.div`
	width: 90%;
	max-width: 600px;
	background-color: #fff;
	margin: 5rem auto 0;
	border-radius: 1.5rem;
	box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.1);
	padding: 1.5rem 2rem;
	display: flex;
	justify-content: space-evenly;
`;

export const Day = styled.div`
	padding: 8px 12px;
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	position: relative;

	& h2 {
		font-size: 1.3rem;
		color: #444;
	}
	& p {
		font-size: 0.925rem;
		color: #555;
	}

	&.active {
		background-color: var(--primary-color);

		h2 {
			color: #fff;
		}

		p {
			color: #fff;
		}
	}

	&.today {
		background-color: #f7f7f7;
		border: 0.1px solid #ddd;
		& h2 {
			color: #444;
		}

		& p {
			color: #555;
		}
	}

	&.event::before {
		content: "";
		width: 6px;
		height: 6px;
		border-radius: 1rem;
		background-color: var(--accent-color);
		position: absolute;
		bottom: -0.8rem;
	}
`;

export const EventsWrapper = styled.section`
	width: 90%;
	max-width: 600px;
	margin: 1rem auto;

	& h3 {
		margin: 1rem 0;
		color: #444;
	}
`;

export const EventContainer = styled.div`
	background-color: #fff;
	padding: 0.8rem 2rem;
	border-radius: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	column-gap: 1rem;
	margin-bottom: 1rem;
`;

export const Bar = styled.div`
	height: 40px;
	width: 6px;
	border-radius: 1rem;
	background-color: var(--accent-color);
	margin-top: 0.5rem;
`;

export const Detail = styled.div`
	& {
		h4 {
			font-size: 1rem;
			color: #333;
		}
	}
`;

export const Location = styled.div`
	display: flex;
	align-items: center;
	column-gap: 4px;
	font-size: 0.825rem;
	color: #444;
`;

export const Time = styled.div`
	display: flex;
	align-items: center;
	column-gap: 4px;
	font-size: 0.825rem;
	color: #444;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 1rem;
  margin: 1.5rem 0 0.6rem;

  & button{
    padding: .4rem 1.5rem;
    background-color: #f8f8f8;
    color: #777;
    border-radius: 8px;

    &.primary{
      background-color: var(--primary-color);
      color: var(--white);
    }
  }
}

`;
