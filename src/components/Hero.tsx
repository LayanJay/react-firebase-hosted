import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Hero() {
  return (
    <Container className="heroContainer">
      <img
        alt=""
        src="src\assets\landing_section\ruler_pattern_left.png"
        className="draftablesRulerLeft"
      />
      <img
        alt=""
        src="src\assets\landing_section\ruler_pattern_right.png"
        className="draftablesRulerRight"
      />
      <div className="landingAssets">
        <img
          alt=""
          src="src\assets\landing_section\slogan-text.png"
          className="landingSlogan"
        />

        <img
          alt=""
          src="src\assets\landing_section\draftable_logo.png"
          className="landingLogo"
        />
      </div>
      <div className="landingButton">
        <h2 className="buttonText">
          Experience the height of sports emulation
        </h2>
        <Button variant="primary">Sign Up For Alpha</Button>
      </div>
    </Container>
  );
}

export default Hero;
