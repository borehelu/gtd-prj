import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 20%;
  margin: 1rem 0;
  background-color: #f7f7f7;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SearchBarForm = styled.form`
  width: 90%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.7rem 1.5rem;
  box-shadow: 0 2px 15px -5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .form-control {
    display: flex;
    align-items: center;
    & .icon {
      color: #999;
      font-size: 1.3rem;
    }
    & input {
      border: none;
      outline: none;
      padding: 1rem 1.5rem;

      &:focus {
        outline: none;
      }
    }
  }

  & .primary {
    width: 120px;
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.6rem 1.5rem;
    border-radius: 0.6rem;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: 500;

    & .icon {
      font-size: 0.9rem;
    }
  }
`;
