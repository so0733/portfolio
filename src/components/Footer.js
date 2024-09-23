import React from "react";
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 10px 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: black;
`;

const IconContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Icon = styled.img`
    width: 45px;
    height: 45px;
    margin: 10px;
`;

const Finish = styled.p`
    font-family: "pretendard_2_font";
    font-size: 12px;
    color: white;
`;

function Footer() {
    return (
        <footer>
            <FooterContainer>
                <IconContainer>
                    <a href="mailto:so0733@naver.com?subject=안녕하세요.">
                        <Icon src="email_icon.png" />
                    </a>
                    
                    <a href="https://github.com/so0733">
                        <Icon src="github_icon.png" />
                    </a>
                </IconContainer>
                
                <Finish>Copyright 2024. So Cheol-Hyeon All rights reserved.</Finish>
            </FooterContainer>
        </footer>
    );
}

export default Footer;
