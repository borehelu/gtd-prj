import styled from "styled-components";

export const InputWrapper = styled.div`
  margin-top: 1rem;

  & input,
  & textarea,
  & select {
    height: 40px;
    border-radius: 4px;
    background-color: #f7f7f7;
    width: 100%;
    font-size: 14px;
    display: block;
    border: none;
    border-radius: 2px;
    padding: 0.5rem 1rem;
  }

  & input:focus,
  & textarea:focus,
  & select:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }

  & label {
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  & input[type="date"] ~ label {
    top: -20px;
    left: 0;
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  & input.error,
  & textarea.error,
  & select.error {
    border-bottom: 2px solid #d90429;
  }

  & ~ small {
    display: flex;
    align-items: center;
    column-gap: 3px;
    color: #d90429;
    margin-bottom: 0.5rem;
  }
`;
