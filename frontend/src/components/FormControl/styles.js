import styled from "styled-components";

export const InputWrapper = styled.div`
  height: 40px;
  position: relative;
  border-radius: 4px;
  background-color: #f7f7f7;
  margin-top: 1.2rem;

  & input {
    width: 100%;
    font-size: 14px;
    display: block;
    border: none;
    border-radius: 2px;
    background: transparent;
    padding: 0.5rem 1rem;
  }

  & input:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }

  & label {
    color: #999;
    font-size: 13px;
    position: absolute;
    pointer-events: none;
    left: 8px;
    top: 10px;
    transition: 0.2s ease all;
  }

  & input:focus ~ label,
  & input:valid ~ label {
    top: -20px;
    left: 0;
    font-size: 14px;
    color: #333;
    font-weight: 500;
  }

  & input.error {
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
