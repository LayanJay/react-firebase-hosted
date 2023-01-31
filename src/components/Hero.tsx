import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/Hero.scss";

function Hero() {
  return (
    <Container className="heroContainer">
      <div className="backgroundAssets">
        <img
          alt=""
          src="src\assets\landing_section\ruler_pattern_left.png"
          className="heroRulerLeft"
        />
        <img
          alt=""
          src="src\assets\landing_section\ruler_pattern_right.png"
          className="heroRulerRight"
        />
        <img
          alt=""
          src="src\assets\dot_pattern_1.png"
          className="dotPatternSlogan"
        />
        <img
          alt=""
          src="src\assets\dot_pattern_1.png"
          className="dotPatternSlogan2"
        />

        <img
          alt=""
          src="src\assets\dot_pattern_2.png"
          className="dotPatternLogo"
        />
      </div>
      <div className="landingAssets">
        <div className="landingLogos">
          <img
            alt=""
            src="src\assets\landing_section\slogan-text.png"
            className="landingLogo"
          />
          <img
            alt=""
            src="src\assets\landing_section\draftable_logo.png"
            className="landingLogo"
          />
        </div>
        <div className="landingButton">
          <h1 className="buttonText">
            Experience the height of sports emulation
          </h1>
          <Button className="buttonGeneral">PLAY</Button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
