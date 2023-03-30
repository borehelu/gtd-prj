import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
`;

export const ModalBody = styled.div``;
