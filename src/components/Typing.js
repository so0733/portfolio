import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const TypingTextContainer = styled.div`
    display: inline-block;
    margin: 0;
`;

const TypingText = styled.span`
    font-size: 4vmin;
    color: #a8edea;
    font-family: "pretendard_2_font";
`;

const blink = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const Cursor = styled.span`
    animation: ${blink} 1s infinite;
`;

const TypingTextComponent = ({text, speed, fontSize, color}) => {
    const [Text, setText] = useState("");
    const [Count, setCount] = useState(0);

    useEffect(() => {
        let typingText = text ? text : "";
        let typingSpeed = speed ? speed : 100;

        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount + 1) % typingText.length);
        }, typingSpeed);
        
        return () => clearInterval(interval);
    }, [speed, text]);

    useEffect(() => {
        setText(text.substring(0, Count + 1));
    }, [Count, text]);

    return (
        <TypingTextContainer>
            <TypingText fontSize={fontSize} color={color}>
                {Text}
                <Cursor>|</Cursor>
            </TypingText>
        </TypingTextContainer>
    );
};

const Typing = () => {
    return (
        <>
            <Container>
                <TypingTextComponent text="☺️안녕하세요! 웹 개발자를 꿈꾸는 소철현 입니다." speed={300} />
            </Container>
        </>
    );
};

export default Typing;
