import React from "react";
import '../style/skills_hover.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styled from 'styled-components';

const SkillsName = styled.div`
    background-color : #181D31;
    color: #ADA2FF;
    border-radius: 10px;
    padding: 10px;
    margin: auto;
    width: 140px;
    text-align : center;
    font-weight: bold;
    font-family: "gmarket_2_font";
`;

const FontSize = styled.div`
    font-size: 50%;
`

function Skills() {
    return(
        <Container>
            <Row>
                <Col>
                    <SkillsName>Language</SkillsName> <br />
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/language1.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>C++</h3>
                            <FontSize>MFC 애플리케이션, MFC 메시지 처리, <br/> 그림판 만들기</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/language2.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>HTML</h3>
                            <FontSize>HTML 기본 태그 및 폼 관련 태그 응용 등 숙지</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/language3.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>CSS</h3>
                            <FontSize>폰트, 텍스트, 스타일, <br/> 블록 태그 요소 등 숙지</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/language4.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>JavaScript</h3>
                            <FontSize>Type, 변수, 배열, 함수, 조건문 등 숙지</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/language5.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Java</h3>
                            <FontSize>자바 기초문법(제어문, <br/> 배열, 연산자) 클래스 <br/> 활용 등 숙지 </FontSize>
                        </div>
                    </div>
                </Col>
                <Col>
                    <SkillsName>Frontend</SkillsName> <br />
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/frontend1.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>React</h3>
                            <FontSize>리액트 컴포넌트와 Props, Axios, 리액트 라이브러리 숙지</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/frontend2.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Redux</h3>
                            <FontSize>액션, 액션 생성 함수, <br/> 리듀서, 스토어, 디스패치 등 숙지</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/frontend3.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Styled <br/>Components</h3>
                            <FontSize>스타일에 props 적용, 스타일 상속 등 숙지, <br/> 반응형 디자인 활용</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/frontend4.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Sass</h3>
                            <FontSize>Sass를 활용해 컴포넌트 스타일링 생산성을 높임</FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/frontend5.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>jQuery</h3>
                            <FontSize>jQuery 기본 문법 숙지 </FontSize>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/frontend6.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Bootstrap</h3>
                            <FontSize>부트스트랩을 사용해 웹 디자인, 반응형 웹페이지 구현</FontSize>
                        </div>
                    </div>
                </Col>
                <Col>
                    <SkillsName>Backend</SkillsName> <br />
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/backend1.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/backend2.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Spring</h3>
                        </div>
                    </div>
                    <SkillsName>Database</SkillsName> <br />
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/database1.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/database2.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>MySQL</h3>
                        </div>
                    </div>
                    <SkillsName>DevOps</SkillsName> <br />
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/devops1.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Github</h3>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src="skills_img/devops2.jpg" alt="Hover Effect" />
                        </div>
                        <div className="info">
                            <h3>Jenkins</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;