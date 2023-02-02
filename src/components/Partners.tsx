import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/Partners.scss";

function Partners() {
  return (
    <Container className="supportingPartners" id="support">
      <img
        alt=""
        src="src/assets/dot_pattern_2.png"
        className="dotPatternPartnerMid"
      />
      <img
        alt=""
        src="src/assets/partners/border_style_bottom.png"
        className="dotPatternPartnerBot"
      />
      <img
        alt=""
        src="src/assets/partners/border_style_top.png"
        className="dotPatternPartnerTop"
      />
      <img
        alt=""
        src="src/assets/dot_pattern_1.png"
        className="dotPatternPartnerBack"
      />
      <img
        alt=""
        src="src/assets/dot_pattern_1.png"
        className="dotPatternPartnerBack2"
      />
      <h1 className="partnersTitle">SUPPORTING PARTNERS</h1>
      <div className="partnersLogos">
        <img
          alt=""
          src="src/assets/partners/img-1.png"
          className="partnersImg"
        />
        <img
          alt=""
          src="src/assets/partners/img-2.png"
          className="partnersImg"
        />
      </div>
      <div>
        <Button className="buttonGeneral buttonGeneralSignup">MORE</Button>
      </div>
    </Container>
  );
}

export default Partners;
