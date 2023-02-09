import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/Partners.scss";
import dotPattern1 from "../assets/dot_pattern_1.png";
import dotPattern2 from "../assets/dot_pattern_2.png";
import bottomPattern from "../assets/partners/border_style_bottom.png";
import topPattern from "../assets/partners/border_style_top.png";
import partnerImg1 from "../assets/partners/img-1.png";
import partnerImg2 from "../assets/partners/img-2.png";

function Partners() {
  return (
    <Container className="supportingPartners" id="support">
      <img alt="" src={dotPattern2} className="dotPatternPartnerMid" />
      <img alt="" src={bottomPattern} className="dotPatternPartnerBot" />
      <img alt="" src={topPattern} className="dotPatternPartnerTop" />
      <img alt="" src={dotPattern1} className="dotPatternPartnerBack" />
      <img alt="" src={dotPattern1} className="dotPatternPartnerBack2" />
      <h1 className="partnersTitle">SUPPORTING PARTNERS</h1>
      <div className="partnersLogos">
        <img alt="" src={partnerImg1} className="partnersImg" />
        <img alt="" src={partnerImg2} className="partnersImg" />
      </div>
      {/*<div>
        <Button className="buttonGeneral buttonGeneralSignup">MORE</Button>
  </div> */}
    </Container>
  );
}

export default Partners;
