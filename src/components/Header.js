import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from "react-scroll";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> <img src="/so.jpg" height="45" alt="" /> So_Portfolio </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              
              <Nav className="justify-content-end flex-grow-1 pe-3" activeKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link><Link to="1" spy={true} smooth={true} duration={500}>HOME</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link><Link to="2" spy={true} smooth={true} duration={500}>ABOUT</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link><Link to="3" spy={true} smooth={true} duration={500}>SKILLS</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link><Link to="4" spy={true} smooth={true} duration={500}>PROJECT</Link></Nav.Link>
                </Nav.Item>
              </Nav>
  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;