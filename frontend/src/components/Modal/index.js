import { useState } from "react";
import { ModalOverlay, ModalContainer, ModalHeader, ModalBody } from "./styles";
import { IoCloseOutline } from "react-icons/io5";

function Modal({ children, show, setShow, title }) {
  return (
    <ModalOverlay show={show}>
      <ModalContainer>
        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={() => setShow(false)}>
            <IoCloseOutline />
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default Modal;
