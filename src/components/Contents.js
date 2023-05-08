import React from "react";
import styled from "styled-components";

import Slide from "./Slide";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import TopButton from "./TopButton";

const ContentsDiv = styled.div`
`;

const Contents = () => {
    return (
        <ContentsDiv>
            <div id="1">
                <Slide />
            </div> <br />
            <div id="2">
                <About />
            </div> <br />
            <div id="3">
                <Skills />
            </div> <br />
            <div id="4">
                <Project />
            </div>
            <TopButton />
        </ContentsDiv>
    );
}

export default Contents;

