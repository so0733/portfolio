import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Section from './Section';

const progressAnimation = (circumference) => keyframes`
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: ${circumference};
    }
`;

const IntroContainer = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    align-items: center;
    justify-content: center;
    color: ${props => (props.isCounting ? 'white' : 'black')};
    background-color: ${props => (props.isCounting ? 'black' : 'white')};
    font-size: 3rem;
`;

const IntroText = styled.div`
    position: absolute;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    font-family: "pretendard_2_font";
`;

const CircleSvg = styled.svg`
    width: 150px;
    height: 150px;
    transform: rotate(-90deg);
`;

const CircleBackground = styled.circle`
    fill: none;
    stroke: grey;
    stroke-width: 10;
`;

const CircleProgress = styled.circle`
    fill: none;
    stroke: white;
    stroke-width: 10;
    stroke-dasharray: ${props => props.circumference};
    stroke-dashoffset: 0;
    animation: ${props => progressAnimation(props.circumference)} 5s linear forwards;
`;

const Intro = () => {
    const [count, setCount] = useState(5);  // 카운트다운 숫자를 저장
    const [isCounting, setIsCounting] = useState(true); // 카운트다운 중인지 상태를 저장

    useEffect(() => { 
        if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);  // count 값이 1씩 감소
            return () => clearTimeout(timer);
        } else {
            setIsCounting(false);
        }
    }, [count]);

    const radius = 70; // 원의 반지름
    const circumference = 2 * Math.PI * radius; // 원의 둘레

    return (
        <>
            {isCounting ? (
                <IntroContainer isCounting={isCounting}>
                    <CircleSvg>
                        <CircleBackground cx="75" cy="75" r={radius} />
                        <CircleProgress cx="75" cy="75" r={radius} circumference={circumference} />
                    </CircleSvg>
                    
                    <IntroText>{count}</IntroText>
                </IntroContainer>
                ) : (
                <Section />
            )}
        </>
    );
};

export default Intro;
