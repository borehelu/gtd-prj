import styled from "styled-components";
import { device } from "../../utils/devices";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;

  & main {
    width: 90%;
    max-width: 1000px;
    height: 55%;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: 0.4rem;
    box-shadow: 1px 3px 5px -1px rgba(0, 0, 0, 0.1);
    padding: 0;

    @media ${device.tablet} {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const Form = styled.form`
  & p {
    font-size: 0.925rem;
  }

  & h2 {
    font-size: 1.3rem;
  }
  & .forgot_password_link {
    display: block;
    font-size: 0.925rem;
    margin-top: 1rem;
    text-align: right;
    color: var(--primary-color);
  }
`;

export const Button = styled.button`
  display: block;
  background: none;
  border: none;
  padding: 0.375rem;
  background-color: var(--primary-color);
  background-color: #203a43;
  color: #fff;
  width: 250px;
  border-radius: 0.125rem;
  margin: 1.5rem 0;
  cursor: pointer;
  font-weight: 700;
`;

export const LeftPanel = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & p {
    font-size: 0.925rem;

    & a {
      color: var(--primary-color);
      font-weight: 700;
    }
  }
`;

export const RightPanel = styled.div`
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 2rem 1rem;

  & h2 {
    font-size: 1.5rem;
  }

  & p {
    font-size: 0.9rem;
  }

  & img {
    height: 60%;
  }

  @media ${device.mobileL} {
    display: none;
  }
`;
