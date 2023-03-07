import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  & label{
    font-size: 15px;
  }

  & input {
    width: 250px;
    padding: 0.375rem 0.752rem;
    outline: none;
    border: none;
    border-radius: 0.25rem;
    background-color: #f6f6f6;
    margin-bottom: 0.125rem;
    appearance: none;
    font-size: 15px;
  }

  & input.error {
    border: 1px solid #d90429;
  }

  & small {
    display:flex;
    align-items: center;
    column-gap: 3px;
    color: #d90429;
  }
`;
