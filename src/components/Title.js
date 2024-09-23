import React from "react";
import styled, { keyframes } from 'styled-components';
import { FaChevronDown } from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 100px 0;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const textFocusIn = keyframes`
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

const TitleFont = styled.p`
  margin: 0;
  padding-left: 10px;
  color: white;
  font-size: 10vmin;
  font-family: "gmarket_1_font";
  text-align: center;
  animation: ${textFocusIn} 3s forwards, ${zoomIn} 3s infinite alternate;
`;

const Title2Font = styled.div`
  margin: 0;
  padding-left: 10px;
  font-size: 8vmin;
  font-family: "gmarket_2_font";
  text-align: center;
  background: linear-gradient(to left top, #fed6e3, #a8edea);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textFocusIn} 5s forwards;
`;

const ScrollText = styled.div`
  margin: 250px 0 -10px;
  color: white;
  font-size: 20px;
  font-family: "pretendard_2_font";
  text-align: center;
  animation: ${textFocusIn} 3s forwards;
`;

const StyledIcon = styled(FaChevronDown)`
  color: white;
  font-size: 50px;
  animation: ${textFocusIn} 3s forwards;
`;

const Title = () => {
  return (
    <>
      <Container>
        <TitleContainer>
          <TitleFont>WELCOME TO</TitleFont>
          <Title2Font>MY PORTFOLIO</Title2Font>

          <ScrollText>Scroll Down</ScrollText>
          <StyledIcon />
        </TitleContainer>
      </Container>
    </>
  );
};

export default Title;
