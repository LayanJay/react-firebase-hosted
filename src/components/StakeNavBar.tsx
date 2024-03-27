import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./styles/NavigationBar.scss";
import draftablesLogo from "../assets/navbar/logo.png";
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';

function StakeNavBar() {
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
            <Link to="/stake" className="nav-link">STAKE</Link>
            <Nav.Link href="https://draft-labs.gitbook.io/draftables-litepaper/" target="_blank" rel="noopener noreferrer">LIGHTPAPER</Nav.Link>
            <Link to="/" className="nav-link">WHAT IS DRAFTABLES</Link>
            <Link to="/" className="nav-link">GAMEPLAY</Link>
            <Link to="/" className="nav-link">ROADMAP</Link>
            <Link to="/" className="nav-link">ABOUT</Link>
            <Link to="/" className="nav-link">TEAM</Link>
            <Link to="/" className="nav-link">CONTACT</Link>
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

export default StakeNavBar;
