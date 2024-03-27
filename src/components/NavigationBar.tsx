import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./styles/NavigationBar.scss";
import draftablesLogo from "../assets/navbar/logo.png";
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show the navbar when scrolling up, hide it when scrolling down
      setShowNav(currentScrollY <= lastScrollY || currentScrollY <= 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
      <Navbar
          sticky="top"
          className={`navigationBarMain ${showNav ? '' : 'hideNav'}`}
          collapseOnSelect
          expand="xl"
          variant="dark"
      >
        <Container fluid className="navBar">
        <img alt="" src={draftablesLogo} className="draftablesLogo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://draft-labs.gitbook.io/draftables-litepaper/" target="_blank" rel="noopener noreferrer">LIGHTPAPER</Nav.Link>
            <Nav.Link href="#gameplay">TRAILER</Nav.Link>
            <Nav.Link href="#whatis">WHAT IS DRAFTABLES</Nav.Link>
            <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
            <Nav.Link href="#aboutus">ABOUT</Nav.Link>
            <Nav.Link href="#ourteam">TEAM</Nav.Link>
            <Nav.Link href="#support">PARTNERS</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <div>
              <Nav.Link href="https://www.premint.xyz/draftables/" target="_blank" rel="noopener noreferrer" 
              role="button" className="buttonGeneral buttonNav">
                PREMINT
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;