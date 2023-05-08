import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components';

const Detail = styled.p`
    position: relative;
    font-size: 14px;
    color: black;
    font-family: "gmarket_2_font";
`;

function ProjectSide02() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src="project_img/postbox1.png"  height="400px" width="100%" alt="postbox1" />
                <Carousel.Caption>
                    <Detail>포스트 글쓰기</Detail>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="project_img/postbox2.png"  height="400px" width="100%" alt="postbox2" />
                <Carousel.Caption>
                    <Detail>포스트 글 조회</Detail>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="project_img/postbox3.png"  height="400px" width="100%" alt="postbox3" />
                <Carousel.Caption>
                    <Detail>포스트 글 목록</Detail>
                </Carousel.Caption>
            </Carousel.Item>
                        
            <Carousel.Item>
                <img className="d-block w-100" src="project_img/postbox4.png"  height="400px" width="100%" alt="postbox4" />
                <Carousel.Caption>
                    <Detail>로그인 구현</Detail>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img className="d-block w-100" src="project_img/postbox5.png"  height="400px" width="100%" alt="postbox5" />
                <Carousel.Caption>
                    <Detail>회원가입 구현</Detail>
                </Carousel.Caption>
            </Carousel.Item>
                        
            <Carousel.Item>
                <img className="d-block w-100" src="project_img/postbox6.png"  height="400px" width="100%" alt="postbox6" />
                <Carousel.Caption>
                    <Detail>Mongo DB 데이터 연동</Detail>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProjectSide02;
