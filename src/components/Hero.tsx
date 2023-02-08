import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/Hero.scss";
import dotPattern1 from "../assets/dot_pattern_1.png";
import dotPattern2 from "../assets/dot_pattern_2.png";
import rulerLeft from "../assets/landing_section/ruler_pattern_left.png";
import rulerRight from "../assets/landing_section/ruler_pattern_right.png";
import landingSlogan from "../assets/landing_section/slogan-text.png";
import landingLogo from "../assets/landing_section/draftable_logo.png";

function Hero() {
  return (
    <Container className="heroContainer">
      <div className="backgroundAssets">
        <img alt="" src={rulerLeft} className="heroRulerLeft" />
        <img alt="" src={rulerRight} className="heroRulerRight" />
        <img alt="" src={dotPattern1} className="dotPatternSlogan" />
        <img alt="" src={dotPattern1} className="dotPatternSlogan2" />

        <img alt="" src={dotPattern2} className="dotPatternLogo" />
      </div>
      <div className="landingAssets">
        <div className="landingLogos">
          <img alt="" src={landingSlogan} className="landingLogo" />
          <img alt="" src={landingLogo} className="landingLogo" />
        </div>
        <div className="landingButton">
          <h1 className="buttonText">
            Experience the height of sports emulation
          </h1>
          <Button href="#gameplay" className="buttonGeneral">
            PLAY
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
