import styled from "styled-components";

export const FormControl = styled.div`
  width: 100%;
  // border: 1px solid #ddd;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  padding: 1rem;
  border-radius: 1rem;

  & input {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    background-color: #f7f7f7;
  }

  & input:focus {
    outline: none;
    border: 1px solid #888;
  }

  & button {
    margin-top: 0.5rem;
    background-color: #223;
    padding: 0.5rem 1rem;
    color: #fff;
    border-radius: 6px;
  }
`;
