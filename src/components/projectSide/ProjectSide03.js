import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components';

const Detail = styled.p`
    position: relative;
    font-size: 14px;
    color: #be2edd;
    font-family: "gmarket_2_font";
`;

function ProjectSide03() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src="project_img/21_portfolio_1.png"  height="400px" width="100%" alt="postbox1" />
                <Carousel.Caption>
                    <Detail>Spring 개인 프로젝트</Detail>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="project_img/21_portfolio_2.png"  height="400px" width="100%" alt="postbox2" />
                <Carousel.Caption>
                    <Detail>Android 개인 프로젝트</Detail>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="project_img/21_portfolio_3.png"  height="400px" width="100%" alt="postbox3" />
                <Carousel.Caption>
                    <Detail>Bigdata 팀 프로젝트</Detail>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectSide03;
