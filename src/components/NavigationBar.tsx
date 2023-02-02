import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import "./styles/NavigationBar.scss";

function NavigationBar() {
  return (
    <Navbar
      className="navigationBarMain"
      collapseOnSelect
      expand="xl"
      bg="primary"
      variant="dark"
    >
      <Container fluid className="navBar">
        <img
          alt=""
          src="src/assets/navbar/logo.png"
          className="draftablesLogo"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#lightpaper">
              <p className="linkLight">LIGHTPAPER</p>
            </Nav.Link>
            <Nav.Link href="#whatis">WHAT IS DRAFTABLES</Nav.Link>
            <Nav.Link href="#aboutus">ABOUT US</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Nav.Link href="#roadmap">ROADMAP</Nav.Link>
            <Nav.Link href="#support">SUPPORTING TEAM</Nav.Link>
            <Nav.Link href="#gameplay">GAMEPLAY</Nav.Link>
          </Nav>
          <Nav>
            <div>
              <Button className="buttonGeneral buttonNav">JOIN NOW</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
