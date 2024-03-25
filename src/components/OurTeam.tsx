import Container from "react-bootstrap/Container";
import "./styles/OurTeam.scss";
import dotPattern1 from "../assets/dot_pattern_4.png";
import dotPattern2 from "../assets/dot_pattern_7.png";
import dotPattern3 from "../assets/dot_pattern_1.png";
import bottomPattern from "../assets/partners/border_style_bottom.png";
import topPattern from "../assets/partners/border_style_top.png";
import partnerImg1 from "../assets/partners/img-1.png";
import partnerImg2 from "../assets/partners/img-2.png";
import partnerImg3 from "../assets/partners/img-4.png";
import vapordexLogo from "../assets/partners/vapordex.png";

function OurTeam() {
    return (
        <Container className="supportingPartners" id="support">
            <img alt="" src={dotPattern2} className="dotPatternPartnerMid"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack2"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack3"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack4"/>
            <h2 className="sectionTitle">OUR TEAM</h2>
            <div className="teamImages">
                <img alt="" src={bottomPattern} className="dotPatternPartnerBot"/>
                <img alt="" src={topPattern} className="dotPatternPartnerTop"/>
                <a href="https://www.wisdom.gg/labs" className="partnersImgContainer">
                    <img alt="" src={partnerImg1} className="partnersImg"/>
                    <div className={"partnerDescription"}>From ideation to development, Wisdom Labs are a fully doxxed
                        team of yield-maxis working at the
                        intersection of marketing and development who can carry any web-based project from beginning to
                        end – all in one place.
                    </div>
                </a>
                <a href="https://www.acmeinnovation.com/" className="partnersImgContainer">
                    <img alt="" src={partnerImg2} className="partnersImg"/>
                    <div className={"partnerDescription"}>Acme is a hybrid venture fund and holding company that invests
                        in, supports, and incubates high-growth potential companies and protocols combining media,
                        entertainment, and emerging technology.
                    </div>
                </a>
                <a href="https://www.avax.network/" className="partnersImgContainer">
                    <img alt="" src={partnerImg3} className="partnersImg"/>
                    <div className={"partnerDescription"}>Avalanche is a smart contracts platform that scales infinitely
                        and regularly finalizes transactions in less than one second. Its novel consensus protocol,
                        Subnet infrastructure, and HyperSDK toolkit enable Web3 developers to easily launch powerful,
                        custom blockchain solutions.
                    </div>
                </a>
                <a href="https://www.vaporfi.io/" className="partnersImgContainer">
                    <img alt="" src={vapordexLogo} className="partnersImg"/>
                    <div className={"partnerDescription"}>VaporDEX is the world’s most rewarding DEX. Trade your crypto
                        with less fees and more options to earn
                    </div>
                </a>
            </div>
            {/*<div>
                <Button className="buttonGeneral buttonGeneralSignup">MORE</Button>
            </div>*/}
        </Container>
    );
}

export default OurTeam;
