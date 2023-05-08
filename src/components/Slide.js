import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components';

const Title = styled.h3`
  position: relative;
  font-family: "gmarket_2_font";
`;
const TitleEn = styled.p`
  position: relative;
  margin-bottom: 120px;
  font-family: "gmarket_2_font";
`;

function Slide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide_img/coding_01.jpg"
          width="100%"
          height="400px"
          alt="1_slide"
        />
        <Carousel.Caption>
          <Title>사용자에게 도움이 되는 서비스를 제공하는 개발자</Title>
          <TitleEn>Developers delivering services that help users</TitleEn>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide_img/coding_02.jpg"
          width="100%"
          height="400px"
          alt="2_slide"
        />

        <Carousel.Caption>
          <Title>읽기 쉬운 코드로 개발하는 개발자</Title>
          <TitleEn>Developers develop with easy-to-read code</TitleEn>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide_img/coding_03.jpg"
          width="100%"
          height="400px"
          alt="3_slide"
        />

        <Carousel.Caption>
          <Title>사용성을 높이기 위해 여러 방법을 시도하는 개발자</Title>
          <TitleEn>Developers trying different ways to increase usability</TitleEn>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide_img/coding_04.jpg"
          width="100%"
          height="400px"
          alt="4_slide"
        />

        <Carousel.Caption>
          <Title>트렌드를 잘 캐치하고 대응하는 개발자</Title>
          <TitleEn>Developers who are good at catching and responding to trends</TitleEn>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="slide_img/coding_05.jpg"
          width="100%"
          height="400px"
          alt="5_slide"
        />

        <Carousel.Caption>
          <Title>동료들과 협업을 통해 성장하는 개발자</Title>
          <TitleEn>Developers growing through collaboration with colleagues</TitleEn>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
