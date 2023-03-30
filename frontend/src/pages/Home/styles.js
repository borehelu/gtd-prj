import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  min-width: 100vw;
  min-height: 20%;
  margin: 1.5rem 0;
  background-color: #f7f7f7;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NewInboxForm = styled.form`
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
    width: 80%;
    & .icon {
      color: #999;
      font-size: 1.3rem;
    }
    & input {
      border: none;
      outline: none;
      padding: 1rem 1.5rem;
      width: 100%;

      &:focus {
        outline: none;
      }
    }
  }

  & .add_inbox_btn {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 0.6rem 1rem;
    border-radius: 0.6rem;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    font-weight: 500;
    min-width: 90px;
    & .icon {
      font-size: 0.9rem;
    }
  }
`;

export const Section = styled.section`
  width: 80%;
  max-width: 600px;
  margin: 1rem auto;

  & .heading {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 0.5rem;
      background-color: #f7f7f7;
      color: #777;
      padding: 0.5rem 1rem;
      border-radius: 0.4rem;
    }
  }
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
`;

export const Item = styled.h2`
  font-size: 0.975rem;
  color: #444;
  font-weight: 600;
`;

export const Time = styled.p`
  font-size: 0.725rem;
  color: #555;
`;
