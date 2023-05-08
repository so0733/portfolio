import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components';

const Detail = styled.p`
  position: relative;
  font-size: 14px;
  color: black;
  font-family: "gmarket_2_font";
`;

const DetailColor = styled.p`
  position: relative;
  font-size: 14px;
  color: #be2edd;
  font-family: "gmarket_2_font";
`;

function ProjectSide01() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src="project_img/news-viewer1.png"  height="400px" width="100%" alt="news-viewer1" />
        <Carousel.Caption>
          <Detail>전체 보기 뉴스 뷰어</Detail>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="project_img/news-viewer2.png"  height="400px" width="100%" alt="news-viewer2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="project_img/news-viewer3.png"  height="400px" width="100%" alt="news-viewer3" />
        <Carousel.Caption>
          <DetailColor>카테고리 기능 코드 구현</DetailColor>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectSide01;
