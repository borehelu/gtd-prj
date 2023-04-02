import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  width: 80%;
  max-width: 500px;
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1.5rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: #333;

  & h2 {
    font-size: 1.35rem;
  }
`;

export const ModalBody = styled.div``;
