import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';

// 애니메이션 키프레임 정의
const textFocusIn = keyframes`
    0% {
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
`;

const textFocusOut = keyframes`
    0% {
        filter: blur(0px);
        opacity: 1;
    }
    100% {
        filter: blur(12px);
        opacity: 0;
    }
`;

const colorFill = keyframes`
    from {
        background-position: -100% -100%;
    }
    to {
        background-position: 100% 100%;
    }
`;

const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100vh;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Image = styled.img`
    display: block;
    width: 20vw;
    height: 50vh;
    border-radius: 5%;
    animation: ${props => props.animated ? textFocusIn : 'none'} 2s forwards;

    @media (max-width: 768px) {
        width: 60%;
        height: 40vh;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const InfoFont = styled.p`
    margin: 10px;
    color: white;
    font-size: 4vmin;
    color: #a8edea;
    font-weight: 600;
    font-family: "notosans_1_font";
    text-align: center;
    animation: ${props => props.animated ? textFocusIn : textFocusOut} 1s forwards;
`;

const Info2Font = styled.p`
    margin: 10px;
    font-size: 3vmin;
    font-family: "pretendard_2_font";
    text-align: left;
    line-height: 1.5;
    font-weight: bold;
    background: linear-gradient(45deg, #A18CD1,#FFFFFF, #a8edea, #FBC2ED);
    background-size: 400% 400%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    animation: ${props => props.fillColor ? colorFill : 'none'} 5s ease infinite;
`;

const About = () => {
    const [imageAnimated, setImageAnimated] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [fillColor, setFillColor] = useState(false);

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        "\"ABOUT ME\"",
        "#책임감 #의사소통 #도전정신",
        "\"I value user experience.\"",
    ];
    const blockquoteRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const element = document.getElementById("triggerElement");
            const elementPosition = element.offsetTop;

            if (currentScrollPos + windowHeight >= elementPosition) {
                setImageAnimated(true);
                setFillColor(true);
            } else {
                setImageAnimated(false);
                setFillColor(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const el = blockquoteRef.current;

        if (el) {
            const duration = 5000;
            const animationDuration = 1000;

            const tl = gsap.timeline({
                repeat: -1, // 무한 반복
                defaults: { duration: animationDuration },
            });

            tl.fromTo(
                el,
                { opacity: 0, filter: 'blur(12px)' },
                { opacity: 1, filter: 'blur(0px)', ease: 'power2.out' }
            )
            .to(el, { opacity: 0, filter: 'blur(12px)', delay: duration / 1000 - animationDuration / 1000, ease: 'power2.in' });

            const intervalId = setInterval(() => {
                setCurrentTextIndex(prev => (prev + 1) % texts.length);
                tl.restart();
            }, duration);

            return () => clearInterval(intervalId);
        }
    }, [texts.length]);

    return (
        <Container>
            <ImageContainer>
                <Image src="./myphoto.png" id="triggerElement" animated={imageAnimated} />
            </ImageContainer>

            <InfoContainer>
                <InfoFont ref={blockquoteRef} animated>
                    {texts[currentTextIndex]}
                </InfoFont>
                <Info2Font fillColor={fillColor}>
                    저는 상상한 아이디어를 현실로 구현하는 과정에서 웹 개발에 대한 흥미를 느끼게 되었습니다.<br />
                    새로운 도전에 대한 열정과 문제 해결 능력을 바탕으로 사용자들에게 가치 있는 서비스를 제공하고자 노력하고 있습니다. <br />
                    지속적인 학습과 팀원들과의 협업을 통해 더 나은 웹 서비스를 제공하기 위해 노력하고 있습니다. <br />
                    다양한 프로젝트를 통해 스스로를 발전시키고, 끊임없이 발전하는 개발 문화에 적극적으로 참여하여 더 나은 개발자로 성장하고자 합니다.
                </Info2Font>
            </InfoContainer>
        </Container>
    );
};

export default About;
