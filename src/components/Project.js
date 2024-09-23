import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
    background-color: black;

    @media screen and (max-width: 1024px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

const NumberContainer = styled.div`
    display: flex;
    width: 40vw;
    justify-content: center;
`;

const Title = styled.p`
    margin: 0;
    font-size: 7vw;
    font-weight: 600;
    font-family: "notosans_2_font";
    color: white;
    z-index: 1;
`;

const Number = styled.p`
    margin: 0;
    font-size: 7vw;
    font-weight: 600;
    font-family: "notosans_2_font";
    color: transparent;
    -webkit-text-stroke-color: #fff;
    -webkit-text-stroke-width: 0.05em;
    -webkit-text-fill-color: transparent;
    z-index: 1;
`;

const ProjectContainer = styled.div`
    display: flex;
    width: 50vw;
    padding: 10px;
    margin: 50px 0 0 0;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    @media screen and (max-width: 1024px) {
        width: 80vw;
    }
`;

const ImageContainer = styled.div`
    display: block;
    width: 100%;
    height: 50vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 20px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    flex-direction: column;
    justify-content: space-between;
`;

const Name = styled.h3`
    display: block;
    margin: 10px;
    font-size: 6vmin;
    font-weight: bold;
    font-family: "pretendard_1_font";
    color: #fff;
    text-align: left;
`;

const Content = styled.p`
    display: block;
    margin: 10px;
    font-size: 2.5vmin;
    line-height: 1.25;
    font-family: "pretendard_1_font";
    color: #fff;
    text-align: left;
`;

const View = styled.button`
    display: inline-block;
    margin: 10px;
    padding: 10px 20px;
    width: auto;
    font-size: 2.5vmin;
    font-family: "pretendard_1_font";
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    border: none;
    border-radius: 4px;
    box-sizing: border-box;
    align-self: flex-end;
    background-color: black;
`;

const Project = () => {
    return (
        <>
            <Container>
                <NumberContainer>
                    <Title>PROJECT</Title>
                    <Number>01</Number>
                </NumberContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <img src="project_img/project01.png" alt="project01" />
                    </ImageContainer>
                    <ContentContainer>
                        <Name>Shopping Mall Web Site</Name>
                        <Content>
                            이 프로젝트는 React.js와 Node.js를 기반으로 하는 쇼핑몰 서비스를 구축한 사이트입니다. <br />
                            다양한 기능을 포함하여 사용자에게 편리한 서비스를 제공하였습니다. <br />
                            주요 기능은 회원가입, 로그인, 상품 관리, 장바구니, 게시판 등으로 구성되어 있습니다.
                        </Content>
                        <View  href="https://github.com/so0733/shampoo_shop" target="_blank" style={{ color: '#F4CBC5' }}>
                            CODE VIEW
                        </View>
                    </ContentContainer>
                </ProjectContainer>
            </Container>

            <Container>
                <NumberContainer>
                    <Title>PROJECT</Title>
                    <Number>02</Number>
                </NumberContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <img src="project_img/project02.png" alt="project02" />
                    </ImageContainer>
                    <ContentContainer>
                        <Name>Engineer Practical CBT Web Site</Name>
                        <Content>
                            이 프로젝트는 React.js를 기반으로 하는 정보처리기사 실기 기출문제 CBT 사이트입니다. <br />
                            자격증 실기 시험을 준비하면서 만든 프로젝트입니다.<br />
                            주요 기능은 년도별 사이드 바, 답 입력, 정답 확인, 랜덤 문제 등을 제공합니다.
                        </Content>
                        <View  href="https://so0733.github.io/pastquizapp/" target="_blank" style={{ color: '#F4B39D' }}>
                            SITE VIEW
                        </View>
                    </ContentContainer>
                </ProjectContainer>
            </Container>

            <Container>
                <NumberContainer>
                    <Title>PROJECT</Title>
                    <Number>03</Number>
                </NumberContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <img src="project_img/project03.png" alt="project03" />
                    </ImageContainer>
                    <ContentContainer>
                        <Name>Post Blog Web Site</Name>
                        <Content>
                            이 프로젝트는 리액트와 몽고DB를 기반으로 하는 포스트 블로그 서비스를 구축한 사이트입니다. <br />
                            사용자는 회원가입 및 로그인 기능을 통해 사이트에 접속할 수 있으며,<br />
                            포스트 목록을 조회하고 읽기, 수정, 삭제하는 등의 기능을 이용할 수 있습니다.
                        </Content>
                        <View  href="https://github.com/so0733/postbox" target="_blank" style={{ color: '#F6D794' }}>
                            CODE VIEW
                        </View>
                    </ContentContainer>
                </ProjectContainer>
            </Container>

            <Container>
                <NumberContainer>
                    <Title>PROJECT</Title>
                    <Number>04</Number>
                </NumberContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <img src="project_img/project04.png" alt="project04" />
                    </ImageContainer>
                    <ContentContainer>
                        <Name>Random Image Generation Web Site</Name>
                        <Content>
                            자바스크립트를 기반으로 하는 싱글 페이지 랜덤 이미지 생성 웹 사이트입니다. <br />
                            로렘 픽숨(Lorem Picsum) API를 활용하여 이미지를 동적으로 불러오며 <br />
                            사용자는 최대 30개의 이미지를 생성할 수 있습니다.
                        </Content>
                        <View  href="https://merry-starburst-98c859.netlify.app/" target="_blank" style={{ color: '#B5D0C7' }}>
                            SITE VIEW
                        </View>
                    </ContentContainer>
                </ProjectContainer>
            </Container>

            <Container>
                <NumberContainer>
                    <Title>PROJECT</Title>
                    <Number>05</Number>
                </NumberContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <img src="project_img/project05.png" alt="project05" />
                    </ImageContainer>
                    <ContentContainer>
                        <Name>Portfolio Page Web Site</Name>
                        <Content>
                            React.js와 styled-components를 활용하여 제작한 포트폴리오 입니다. <br />
                            애니메이션과 웹 반응형 페이지를 통해 사용자에게 동적이고 흥미로운 경험을 제공합니다 <br />
                            기술적인 특징과 디자인 요소를 조화롭게 결합하여 나 자신에 대한 정보를 효과적으로 전달합니다.  
                        </Content>
                        <View  href="https://so0733.github.io/portfolio/" target="_blank" style={{ color: '#B1CADE' }}>
                            SITE VIEW
                        </View>
                    </ContentContainer>
                </ProjectContainer>
            </Container>

            <Container>
                <NumberContainer>
                    <Title>PROJECT</Title>
                    <Number>06</Number>
                </NumberContainer>
                <ProjectContainer>
                    <ImageContainer>
                        <img src="project_img/project06.png" alt="project06" />
                    </ImageContainer>
                    <ContentContainer>
                        <Name>2021 Portfolio Page PDF</Name>
                        <Content>
                            2021년 제작한 개인 프로젝트를 정리한 PPT 입니다.
                        </Content>
                        <View  href="https://drive.google.com/file/d/13KGDZYPLvZN2PvA4MNZGQp37XeiJd0LR/view?pli=1" target="_blank" style={{ color: '#C5C5E9' }}>
                            FILE VIEW
                        </View>
                    </ContentContainer>
                </ProjectContainer>
            </Container>
        </>
    );
};

export default Project;
