import styled from "styled-components";

export const InboxWrapper = styled.div`
  border-radius: 8px;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 1rem 0;
  border: 1px solid #efefef;
  box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.15),
    2px 0 3px -2px rgba(0, 0, 0, 0.15);

  & div p {
    font-size: 0.935rem;
    font-weight: 500;
    color: #111;
    & small {
      font-size: 0.725rem;
      color: #555;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  column-gap: 0.6rem;

  & button {
    color: #666;
  }
`;
