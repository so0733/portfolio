import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const ScrollContainer = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;

const TopButtonStyled = styled.button`
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

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);

    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return showButton && (
    <ScrollContainer>
      <TopButtonStyled id="top" onClick={scrollToTop} type="button">
        <FaArrowUp />
      </TopButtonStyled>
    </ScrollContainer>
  );
};

export default TopButton;
