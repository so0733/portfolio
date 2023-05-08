import React, { useState, useEffect } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from "react-bootstrap/Image";
import styled from 'styled-components';

import { BsFillPersonBadgeFill, BsFillCalendarDayFill, BsFillBookFill, BsFillTelephoneFill, BsAt, BsGithub } from "react-icons/bs";

const Title = styled.h3`
    position: relative;
    font-weight: bold;
    font-family: "gmarket_2_font";
`;

const Contents = styled.h4`
    position: static;
    text-align : center;
    font-family: "gmarket_2_font";
`;

const TypingText = ({text, speed, fontSize, color}) => {
    TypingText.defaultProps = {
        fontSize: '1em', //기본값
        color: 'black'//기본값
    }
    const [Text, setText] = useState("");
    const [Count, setCount] = useState(0);
  
    useEffect(() => {
        let typingText = text ? text : "";
        let typingSpeed = speed ? speed : 100;
        const interval = setInterval(() => {
            setText((Text)=>{
                let updated = Text;
                updated = Text + typingText[Count];
                return updated;
            });
            setCount(Count + 1); 
        }, typingSpeed);
        Count === typingText.length && clearInterval(interval);
        return () => clearInterval(interval);
    })
    return (
        <span style={{fontSize:`${fontSize}`, color:`${color}`}} >{ Text }</span>
    )
};

const AboutMe = styled.div`
    text-align : center;
    font-size: 1.2em;
    font-family: "gmarket_2_font";
`;

function About() {
    return(
        <Container>
            <Row>
                <Col>
                    <div className="text-center">
                        <Image src="./myphoto.png" width={200} height={270} roundedCircle />
                    </div>
                </Col>
                <Col>
                    <Title> <BsFillPersonBadgeFill /> 이름 </Title>
                    <Contents>소철현</Contents> <br />
                    <Title> <BsFillCalendarDayFill /> 생년월일 </Title> 
                    <Contents>1995.11.07</Contents> <br />
                    <Title> <BsFillBookFill /> 학력 </Title>
                    <Contents>경성대학교 전자공학과</Contents>
                </Col>
                <Col>
                    <Title> <BsFillTelephoneFill /> 연락처 </Title>
                    <Contents>010.2394.4304</Contents> <br />
                    <Title> <BsAt /> 이메일 </Title>
                    <Contents>so0733@naver.com</Contents> <br />
                    <Title> <BsGithub /> 깃허브 </Title>
                    <Contents>github.com/so0733</Contents> <br />
                </Col>
            </Row>
            <div>
                <AboutMe> <br />
                    <TypingText text="☺️안녕하세요! Front-End 개발에 관심이 있는 주니어 개발자 소철현 입니다." speed={300} fontSize="1.25rem" color="#ADA2FF" /> <br/>
                    <span>
                        상상한 아이디어를 눈에 보이게 하는 기술을 배우는 과정에 재미를 느꼈습니다. <br />
                        다른 생각을 가진 동료와 커뮤니케이션을 통해 아이디어를 공유하고 피드백을 주고받으며 <br />
                        개발문화에 자연스럽게 녹여 들어 더 나은 개발자가 되겠습니다.
                    </span>
                </AboutMe>
            </div>
        </Container>
    );
}

export default About;