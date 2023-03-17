import styled from "styled-components";

export const InboxWrapper = styled.div`
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0;
  box-shadow: 0 1px 5px -2px rgba(0, 0, 0, 0.2),
    1px 0 5px -2px rgba(0, 0, 0, 0.2);

  & div p {
    font-size: 0.935rem;
    color: #222;
    & small {
      font-size: 0.725rem;
      color: #444;
    }
  }
`;
