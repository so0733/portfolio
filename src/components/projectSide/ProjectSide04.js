import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components';

const Detail = styled.p`
  position: relative;
  font-size: 14px;
  color: #be2edd;
  font-family: "gmarket_2_font";
`;

function ProjectSide04() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src="project_img/randomimage1.png"  height="400px" width="100%" alt="randomimage1" />
        <Carousel.Caption>
          <Detail>Chat GPT 활용</Detail>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="project_img/randomimage2.png"  height="400px" width="100%" alt="randomimage2" />
        <Carousel.Caption>
          <Detail>랜덤 이미지 생성</Detail>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="project_img/randomimage3.png"  height="400px" width="100%" alt="randomimage3" />
        <Carousel.Caption>
          <Detail>메시지 출력 및 초기화</Detail>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectSide04;
