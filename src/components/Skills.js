import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 80%;
    height: 100vh;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const BoxContainer = styled.div`
    display: flex;
    width: 30%;
    height: 100vh;
    margin: 10px;
    gap: 5px;
    flex-direction: column;
`;

const TitleFont = styled.p`
    margin: 0;
    font-size: 2vw;
    font-weight: 600;
    font-family: "notosans_1_font";
    color: #a8edea;
    text-align: center;
    text-shadow: 4px 2px 4px rgba(255, 255, 255, 0.7);
`;

const SkillBox = styled.div`
    display: flex;
    width: 100%;
    height: 18vw;
    align-items: center;
    justify-content: center;
`;

const ImageBox = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin: 10px auto 10%;
    background: #000 url(${props => props.image}) center/cover no-repeat;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    &:hover .skill-info {
        opacity: 1;
    }

    @media screen and (min-width: 480px) {
        width: 100px;
        height: 100px;
    }

    @media screen and (min-width: 768px) {
        width: 110px;
        height: 110px;
    }

    @media screen and (min-width: 1024px) {
        width: 120px;
        height: 120px;
    }
`;

const SkillInfo = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 2;
`;

const Title = styled.p`
    margin: 0;
    font-size: 10px;
    font-family: "notosans_2_font";
    color: #ffffff;


    @media screen and (min-width: 480px) {
        margin-bottom: 5px;
        font-size: 8px;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 5px;
        font-size: 12px;
    }

    @media screen and (min-width: 1024px) {
        margin-bottom: 10px;
        font-size: 18px;
    }
`;

const Content = styled.p`
    margin: 0;
    font-size: 10px;
    font-family: "pretendard_1_font";
    font-weight: 400;
    color: #ffffff;
    line-height: 1.5;
    white-space: pre-line;

    @media screen and (max-width: 480px) {
        font-size: 1.25vmin;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        font-size: 2vmin;
    }
   

`;

const Skills = () => {
    return (
        <Container>
            <BoxContainer>
                <TitleFont>Language</TitleFont>
                <SkillBox>
                    <ImageBox image="skills_img/language1.jpg">
                        <SkillInfo className="skill-info">
                            <Title>C++</Title>
                            <Content>MFC 애플리케이션 개발<br/>MFC 메시지 맵<br/> 이벤트 처리<br/>그림판 기능 구현</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/language2.jpg">
                        <SkillInfo className="skill-info">
                            <Title>HTML</Title>
                            <Content>HTML 기본 태그 활용<br/>폼 관련 태그 응용</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/language3.jpg">
                        <SkillInfo className="skill-info">
                            <Title>CSS</Title>
                            <Content>폰트 및 텍스트 스타일링<br/>레이아웃 설계<br/>미디어쿼리 사용</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/language4.jpg">
                        <SkillInfo className="skill-info">
                            <Title>JavaScript</Title>
                            <Content>함수 정의 및 호출<br/>사용자 이벤트 처리<br/>비동기 데이터 처리</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
            </BoxContainer>
            <BoxContainer>
                <TitleFont>Frontend</TitleFont>
                <SkillBox>
                    <ImageBox image="skills_img/frontend1.jpg">
                        <SkillInfo className="skill-info">
                            <Title>React</Title>
                            <Content>UI 컴포넌트 기반 설계<br/>useState 등 상태 관리<br/>클라이언트 사이드 라우팅 구현</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/frontend2.jpg">
                        <SkillInfo className="skill-info">
                            <Title>Styled<br/>Components</Title>
                            <Content>동적 스타일링 구현<br/>일관된 디자인 테마 적용<br/>조건부 스타일링 적용</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/frontend3.jpg">
                        <SkillInfo className="skill-info">
                            <Title>Bootstrap</Title>
                            <Content>반응형 레이아웃 구현<br/>UI 컴포넌트 사용<br/>커스텀 스타일링 적용</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/frontend4.jpg">
                        <SkillInfo className="skill-info">
                            <Title>Redux</Title>
                            <Content>전역 상태 관리<br/>비동기 로직 처리<br/>상태 변경 추적 및 디버깅</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
            </BoxContainer>
            <BoxContainer>
                <TitleFont>Backend</TitleFont>
                <SkillBox>
                    <ImageBox image="skills_img/backend1.jpg">
                        <SkillInfo className="skill-info">
                            <Title>NodeJS</Title>
                            <Content>Express.js 활용 서버 구축<br/>비동기 코드 작성<br/>모듈 활용 파일 입출력 작업</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <TitleFont>Database</TitleFont>
                <SkillBox>
                    <ImageBox image="skills_img/database1.jpg">
                        <SkillInfo className="skill-info">
                            <Title>MongoDB</Title>
                            <Content>NoSQL 데이터베이스 설계<br/>Mongoose 사용<br/> CRUD 작업</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <SkillBox>
                    <ImageBox image="skills_img/database2.jpg">
                        <SkillInfo className="skill-info">
                            <Title>MySQL</Title>
                            <Content>관계형 데이터베이스 설계<br/>SQL 쿼리 작성<br/>트랜잭션 관리</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
                <TitleFont>DevOps</TitleFont>
                <SkillBox>
                    <ImageBox image="skills_img/devops1.jpg">
                        <SkillInfo className="skill-info">
                            <Title>GitHub</Title>
                            <Content>버전 관리<br/>협업 및 코드 리뷰<br/>빌드 및 배포</Content>
                        </SkillInfo>
                    </ImageBox>
                </SkillBox>
            </BoxContainer>
        </Container>
    );
};

export default Skills;
