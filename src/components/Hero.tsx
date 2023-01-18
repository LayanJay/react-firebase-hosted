import Container from "react-bootstrap/Container";

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
    </Container>
  );
}

export default Hero;
