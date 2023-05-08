import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BsGlobe, BsGithub, BsFillFileEarmarkPdfFill } from "react-icons/bs";

import styled from 'styled-components';

import ProjectSide01 from './projectSide/ProjectSide01';
import ProjectSide02 from './projectSide/ProjectSide02';
import ProjectSide03 from './projectSide/ProjectSide03';
import ProjectSide04 from './projectSide/ProjectSide04';

const Detail = styled.p`
    font-size: 14px;
    font-weight: bold;
`;

const Contents = styled.p`
    height: 120px;
    font-size: 14px;
    line-height: 170%;
`;

const ButtonStyle = styled.div`
    float: right;
`;

function Project() {
    return(
        <Container>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <video height="400px" width="100%" autoPlay muted loop>
                            <source src="project_img/todo-app-test.mp4" />
                        </video>                        
                        <Card.Body>
                            <Card.Title><b>투두 리스트</b></Card.Title>
                            <Detail>일정관리 애플리케이션</Detail>
                            <Contents>
                                <b>프로젝트 기간 :</b> 22.08.22 (1 DAY) <br />
                                <b>주요 구현 기능 :</b> 일정 추가, 삭제, 체크, 토글 기능 구현
                            </Contents> <hr />
                            
                            <ButtonStyle>
                                <Button variant="outline-secondary" href="https://so0733.github.io/todo-app/"> <BsGlobe /> </Button>
                                <Button variant="outline-secondary" href="https://github.com/so0733/todo-app"> <BsGithub /> </Button>
                            </ButtonStyle>
                        </Card.Body>
                    </Card>
                </Col> 

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ProjectSide01 />
                        <Card.Body>
                            <Card.Title><b>뉴스 뷰어</b></Card.Title>
                            <Detail>newsapi API 연동 뉴스 뷰어</Detail>
                            <Contents>
                                <b>프로젝트 기간 :</b> 22.08.25 (1 DAY) <br />
                                <b>주요 구현 기능 :</b> 뉴스 데이터(newsapi)연동, 카테고리 기능 구현, 기사 목록 출력, 단일 기사 출력
                            </Contents> <hr />

                            <ButtonStyle>
                                {/* <Button variant="outline-secondary" href="https://so0733.github.io/news-viewer/"> <BsGlobe /> </Button> */}
                                <Button variant="outline-secondary" href="https://github.com/so0733/news-viewer"> <BsGithub /> </Button>
                            </ButtonStyle>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ProjectSide02 />
                        <Card.Body>
                            <Card.Title><b>포스트 웹 서비스</b></Card.Title>
                            <Detail>post web service</Detail>
                            <Contents>
                                <b>프로젝트 기간 :</b> 22.09.07 ~ 22.09.16 (10 DAY) <br />
                                <b>주요 구현 기능 :</b> Mongo DB이용, 로그인, 로그아웃, 회원가입, 글쓰기, 포스트 목록 조회, 읽기, 수정, 삭제 기능 구현
                            </Contents> <hr />

                            <ButtonStyle>
                                <Button variant="outline-secondary" href="https://github.com/so0733/postbox"> <BsGithub /> </Button>
                            </ButtonStyle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> <br />
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ProjectSide04 />
                        <Card.Body>
                            <Card.Title><b>랜덤 이미지 생성</b></Card.Title>
                            <Detail>Random image generation</Detail>
                            <Contents>
                                <b>프로젝트 기간 :</b> 23.05.08 (1 DAY) <br />
                                <b>주요 구현 기능 :</b> 이미지 URL API 이용한 이미지 생성, Chat GPT 활용
                            </Contents> <hr />
                            
                            <ButtonStyle>
                                <Button variant="outline-secondary" href="https://merry-starburst-98c859.netlify.app/"> <BsGlobe /> </Button>
                                <Button variant="outline-secondary" href="https://github.com/so0733/chatGPT"> <BsGithub /> </Button>
                            </ButtonStyle>
                        </Card.Body>
                    </Card>
                </Col>

                {/* <Col>
                    <Card style={{ width: '18rem' }}>
                        <img src="preparations.png" height="400px" width="100%" alt='so' />
                        <Card.Body>
                            <Card.Title><b>샴푸샵</b></Card.Title>
                            <Detail>리액트 쇼핑몰 프로젝트 </Detail>
                            <Contents>프로젝트 기간 : 23.05 예정 (? DAY) <br /> Mongo DB이용, 로그인, 회원가입, 글쓰기, 조회, 수정, 삭제 기능 구현</Contents> <hr />

                            <ButtonStyle>
                                <Button variant="outline-secondary" href="#"> <BsGlobe /> </Button>
                                <Button variant="outline-secondary" href="#"> <BsGithub /> </Button>
                            </ButtonStyle>
                        </Card.Body>
                    </Card>
                </Col> */}

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <ProjectSide03 />
                        <Card.Body>
                            <Card.Title><b>2021 포트폴리오</b></Card.Title>
                            <Detail>2021 Portfolio</Detail>
                            <Contents>
                                <b>개인 프로젝트</b> <br/>
                                1. 별다방 커피 쇼핑몰 - 자바,스프링 <br />
                                2. 자이언츠 어플 - 안드로이드 <br /><br />
                                <b>팀 프로젝트</b> <br/>
                                부산인구 현황 분석
                            </Contents>

                            <ButtonStyle>
                                <Button variant="outline-secondary" href="https://drive.google.com/file/d/13KGDZYPLvZN2PvA4MNZGQp37XeiJd0LR/view?usp=share_link"> <BsFillFileEarmarkPdfFill /> </Button>
                            </ButtonStyle>
                        </Card.Body>
                    </Card>
                </Col>
                
                <Col>
                </Col>
            </Row> <br />
        </Container>
    );
}

export default Project;