import React from "react";
import styled from "styled-components";
import cancelbutton from "/Users/mac/Downloads/Brandily/Brandily/src/assets/cancelbutton.svg";
import styleplus from "/Users/mac/Downloads/Brandily/Brandily/src/assets/Styleplus.svg";
import { Link } from "react-router-dom";

import "./Modal.css";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center; /* center horizontally */
  align-items: center; /* center vertically */
  z-index: 1000;
  background: #353342;
`;

const ModalContent = styled.div`
  background-color: #353342;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  animation: slide-in 0.3s forwards;

  @keyframes slide-in {
    to {
      transform: translateX(0);
    }
  }
`;

const CloseButton = styled.button`
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 1rem;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background-color: #353342;
  margin-top: 70px;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  padding: 0.5rem;
  width: 150px;
  cursor: pointer;
  &:hover {
    background: #555;
  }
`;

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="stylepluscancel">
          <div>
            <img className="styleplusi" src={styleplus} />
          </div>
          <div>
            <CloseButton onClick={onClose}>
              <img className="cancelbutton" src={cancelbutton} />
            </CloseButton>
          </div>
        </div>
        <Dropdown>
          <Link to="/about">
            <DropdownButton>About</DropdownButton>
          </Link>
          <Link to="/contact">
            <DropdownButton>Contact</DropdownButton>
          </Link>
          <Link to="/service">
            <DropdownButton>Service</DropdownButton>
          </Link>
          <Link to="/suport">
            <DropdownButton>Support</DropdownButton>
          </Link>
          <Link to="/">
            <div>
              <button className="startbutton">Get Started</button>
            </div>
          </Link>
        </Dropdown>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
