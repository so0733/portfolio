import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const MenuContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 10%;
  z-index: 1;

  @media screen and (min-width: 480px) and (max-width: 885px) {
    bottom: 18%;
  }
  @media screen and (max-width: 479px) {
    bottom: 12%;
  }
`;

const MenuButtonStyled = styled.button`
  font-size: 16px;
  background-color: transparent;
  color: white;
  opacity: 0.5;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #a8edea;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  width: 100px;
  right: 0;
  bottom: 50px;
  background-color: transparent;
  opacity: 0.5;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: 10px;
  z-index: 2;
`;

const MenuItem = styled.a`
  display: block;
  padding: 10px;
  text-decoration: none;
  font-family: "notosans_1_font";
  background-color: black;
  color: white;
  &:hover {
    background-color: #f0f0f0;
    color: black;
  }
`;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <MenuContainer>
      <MenuButtonStyled onClick={toggleMenu} type="button">
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButtonStyled>
      <DropdownMenu isOpen={isOpen}>
        <MenuItem href="#about">About</MenuItem>
        <MenuItem href="#skills">Skills</MenuItem>
        <MenuItem href="#project">Project</MenuItem>
      </DropdownMenu>
    </MenuContainer>
  );
}

export default Menu;
