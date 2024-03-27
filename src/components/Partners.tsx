import Container from "react-bootstrap/Container";
import "./styles/Partners.scss";
import dotPattern1 from "../assets/dot_pattern_4.png";
import dotPattern2 from "../assets/dot_pattern_7.png";
import dotPattern3 from "../assets/dot_pattern_1.png";
import bottomPattern from "../assets/partners/border_style_bottom.png";
import topPattern from "../assets/partners/border_style_top.png";
import partnerImg1 from "../assets/partners/img-1.png";
import partnerImg2 from "../assets/partners/img-2.png";
import partnerImg3 from "../assets/partners/Avalanche_AVAX_White.png";
import vapordexLogo from "../assets/partners/vapordex.png";
import dVerseLogo from "../assets/partners/DVerse.png";
import infernoLogo from "../assets/partners/Inferno_Labs.png";

function Partners() {
    return (
        <Container className="supportingPartners" id="support">
            <img alt="" src={dotPattern2} className="dotPatternPartnerMid"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack2"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack3"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack4"/>
            <h2 className="sectionTitle">SUPPORTING PARTNERS</h2>
            <div className="partnersLogos">
                <img alt="" src={bottomPattern} className="dotPatternPartnerBot"/>
                <img alt="" src={topPattern} className="dotPatternPartnerTop"/>
            </div>
        </Container>
    );
}

export default Partners;
