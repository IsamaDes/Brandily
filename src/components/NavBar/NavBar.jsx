import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import styleplus from "../assets/Styleplus.svg";
import sectionbutton from "../assets/sectionsbuttonimg.svg";
import { Link } from "react-router-dom";

import "./NavBar.css";

const Headerfeature = styled.nav`
  display: flex;
  justify-content: space-around;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #353342;
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  z-index: 10;
`;

const NavButton = styled.button`
  background: #555;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background: tan;
  }
`;

const NavBar = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const handleGetStartedClick = () => {
    setisModalOpen(true);
  };
  const handleCloseModal = () => {
    setisModalOpen(false);
  };

  return (
    <>
      <Headerfeature>
        <div className="innerheader">
          <div className="style">
            <img className="styleplus" src={styleplus} />
          </div>

          <div className="startsection">
            <Link to="/about">
              <div>
                <button className="startbutton">Get Started</button>
              </div>
            </Link>

            <NavButton onClick={handleGetStartedClick}>
              <img className="selectbutton" src={sectionbutton} />
            </NavButton>
          </div>

          <div className="sectionsstart">
            <div className="sections">
              <Link to="/about">
                <button className="button">About</button>
              </Link>
              <Link to="/Services">
                <button className="button">Services</button>
              </Link>
              <Link to="/Careers">
                <button className="button">Careers</button>
              </Link>
              <Link to="/Contact">
                <button className="button">Contact</button>
              </Link>
            </div>

            <div className="start">
              <NavButton
                className="startbutton"
                onClick={handleGetStartedClick}
              >
                Get Started
              </NavButton>
            </div>
          </div>
        </div>
      </Headerfeature>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default NavBar;
