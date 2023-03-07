import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const Form = styled.form`
  padding: 1rem 2rem;
  background-color: #fff;
  border-radius: .4rem;
  box-shadow: 1px 3px 5px -1px rgba(0,0,0,0.1);

  & p {
    font-size: 0.925rem;
    margin-bottom: 1rem;
  }
  & a {
    color: #333;
    font-size: 0.925rem;
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0.375rem;
  background-color: #002e4e;
  color: #fff;
  width: 250px;
  border-radius: 0.125rem;
  margin: 0.5rem 0;
  cursor: pointer;
  font-weight: 700;
`;
