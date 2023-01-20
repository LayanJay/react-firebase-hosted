import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function WhatIs() {
  return (
    <Container className="whatIsContainer">
      <h1 className="ownYourTeam">OWN. YOUR. TEAM.</h1>
      <div className="landingButton">
        <h1 className="buttonText">
          Experience the height of sports emulation
        </h1>
        <Button className="buttonAlpha">Sign Up For Alpha</Button>
      </div>
    </Container>
  );
}

export default WhatIs;
