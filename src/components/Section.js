import React from "react";
import styled from 'styled-components';
import Title from "./Title";
import Typing from "./Typing";
import Typing2 from "./Typing2";
import Scroll from "./Scroll";
import About from "./About";
import Marquee from "./Marquee";
import Skills from "./Skills";
import Project from "./Project";
import TopButton from './TopButton';
import Footer from "./Footer";
import Menu from "./Menu";

const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    background-color: black;
    font-size: 3rem;
`;

const EmptyContainer = styled.div`
    display: block;
    height: 50vh;
    background-color: black;
`;

const Section = () => {
    return (
        <>
            <Container>
                <Title />
            </Container>

            <Container>
                <Typing />
            </Container>

            <Scroll />
            
            <Container id="about">
                <About />
            </Container>

            <Container>
                <Marquee />
            </Container>

            <Container id="skills">
                <Skills />
            </Container>

            <EmptyContainer />

            <Container id="project">
                <Typing2 />
            </Container>
            
            <Project/>

            <Menu />
            <TopButton />
            <Footer />
        </>
    );
};

export default Section;
