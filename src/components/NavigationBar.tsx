import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavigationBar() {
  return (
    <Navbar expand="xl" bg="primary" variant="dark">
      <Container fluid className="navbar">
        <img
          alt=""
          src="src\assets\navbar\logo.png"
          width="5%"
          height="5%"
          className=""
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
          <Nav.Link href="#join">JOIN NOW</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
