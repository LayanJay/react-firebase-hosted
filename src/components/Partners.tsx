import Container from "react-bootstrap/Container";
import "./styles/Partners.scss";
import dotPattern1 from "../assets/dot_pattern_4.png";
import dotPattern2 from "../assets/dot_pattern_7.png";
import dotPattern3 from "../assets/dot_pattern_1.png";
import bottomPattern from "../assets/partners/border_style_bottom.png";
import topPattern from "../assets/partners/border_style_top.png";
import partnerImg1 from "../assets/partners/img-1.png";
import partnerImg2 from "../assets/partners/img-2.png";
import partnerImg3 from "../assets/partners/img-4.png";

function Partners() {
    return (
        <Container className="supportingPartners" id="support">
            <img alt="" src={dotPattern2} className="dotPatternPartnerMid"/>
            <img alt="" src={bottomPattern} className="dotPatternPartnerBot"/>
            <img alt="" src={topPattern} className="dotPatternPartnerTop"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack2"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack3"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack4"/>
            <h2 className="sectionTitle">SUPPORTING PARTNERS</h2>
            <div className="partnersLogos">
                <a href="https://www.wisdom.gg/labs"><img alt="" src={partnerImg1} className="partnersImg"/></a>
                <a href="https://www.acmeinnovation.com/"><img alt="" src={partnerImg2} className="partnersImg"/></a>
                <a href="https://www.avax.network/"><img alt="" src={partnerImg3} className="partnersImg"/></a>
            </div>
            {/*<div>
                <Button className="buttonGeneral buttonGeneralSignup">MORE</Button>
            </div>*/}
        </Container>
  );
}

export default Partners;
