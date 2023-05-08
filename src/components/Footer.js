import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Finish = styled.p`
  font-size: 12px;
`;

const Icon = styled.img`
  width: 45px;
  height: 45px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-inline: 10px;
`;

function Footer() {
  return (
    <footer className="bg-dark text-white text-center">
      <Container>
        <Row>
          <Col>
            <a href="mailto:so0733@naver.com?subject=안녕하세요.">
              <Icon src="email_icon.png" />
            </a>
            <a href="https://github.com/so0733">
              <Icon src="github_icon.png" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <Finish>Copyright 2023. So Cheol-Hyeon All rights reserved.</Finish>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
