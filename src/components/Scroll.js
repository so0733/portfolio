import React, { useLayoutEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  overflow-x: hidden;
`;

const Panel = styled.div`
  flex: 1 0 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const Title = styled.p`
  font-size: 3vmin;
  color: white;
  font-family: "pretendard_2_font";
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  backdrop-filter: blur(10px); // 배경 흐림 효과 추가
  border-radius: 5px; // 경계선 둥글게 하기
`;


const TitleEn = styled.p`
  font-size: 2.5vmin;
  color: white;
  font-family: "pretendard_2_font";
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  backdrop-filter: blur(10px); // 배경 흐림 효과 추가
  border-radius: 5px; // 경계선 둥글게 하기

`;

const panelsData = [
  { img: 'slide_img/coding_01.jpg', title: '사용자에게 도움이 되는 서비스를 제공하는 개발자', titleEn: 'Developers delivering services that help users' },
  { img: 'slide_img/coding_02.jpg', title: '읽기 쉬운 코드로 개발하는 개발자', titleEn: 'Developers develop with easy-to-read code' },
  { img: 'slide_img/coding_03.jpg', title: '사용성을 높이기 위해 여러 방법을 시도하는 개발자', titleEn: 'Developers trying different ways to increase usability' },
  { img: 'slide_img/coding_04.jpg', title: '트렌드를 잘 캐치하고 대응하는 개발자', titleEn: 'Developers who are good at catching and responding to trends' },
  { img: 'slide_img/coding_05.jpg', title: '동료들과 협업을 통해 성장하는 개발자', titleEn: 'Developers growing through collaboration with colleagues' },
];

const Scroll = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const panels = gsap.utils.toArray('.panel');

    gsap.to(panels, {
      xPercent: -100 * (panels.length),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        start: 'top top',
        end: () => `+=${container.scrollWidth}`,
        markers: false, // 마커 숨기기
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
    <GlobalStyle />
    <Container ref={containerRef} className="container">
      {panelsData.map((panel, index) => (
        <Panel key={index} className="panel" style={{ backgroundImage: `url(${panel.img})` }}>
          <Title>{panel.title}</Title>
          <TitleEn>{panel.titleEn}</TitleEn>
        </Panel>
      ))}
    </Container>
    </>
  );
};

export default Scroll;
