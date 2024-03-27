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
                <a href="https://www.acmeinnovation.com/" 
                className="partnersImgContainer"
                target="_blank" rel="noreferrer noopener">
                    <img alt="" src={partnerImg2} className="partnersImg"/>
                    <div className={"partnerDescription"}>Acme is a hybrid venture fund and holding company that invests
                        in, supports, and incubates high-growth potential companies and protocols combining media,
                        entertainment, and emerging technology.
                    </div>
                </a>
                <a href="https://www.avax.network/" 
                className="partnersImgContainer" 
                target="_blank" rel="noreferrer noopener">
                    <img alt="" src={partnerImg3} className="partnersImg"/>
                    <div className={"partnerDescription"}>Avalanche is a smart contracts platform that scales infinitely
                        and regularly finalizes transactions in less than one second. Its novel consensus protocol,
                        Subnet infrastructure, and HyperSDK toolkit enable Web3 developers to easily launch powerful,
                        custom blockchain solutions.
                    </div>
                </a>
                <a href="https://dverse.xyz/" 
                className="partnersImgContainer" 
                target="_blank" rel="noreferrer noopener">
                    <img alt="" src={dVerseLogo} className="partnersImg"/>
                    <div className={"partnerDescription"}>
                    DVerse is an advisory, strategy, and communications firm with a global team presence, 
                    ready ro lead and accelerate businesses, institutions, and governments into Web 3.
                    </div>
                </a>
                <a href="https://infernolabs.xyz/" 
                className="partnersImgContainer" 
                target="_blank" rel="noreferrer noopener">
                    <img alt="" src={infernoLogo} className="partnersImg"/>
                    <div className={"partnerDescription"}>
                    Inferno Labs is a world-class team of Trusted Advisors and Marketers, Empowering Brands 
                    in the Dynamic World of Web 3 and Beyond.
                    </div>
                </a>
                <a href="https://www.wisdom.gg/labs" className="partnersImgContainer">
                    <img alt="" src={partnerImg1} className="partnersImg"/>
                    <div className={"partnerDescription"}>From ideation to development, Wisdom Labs are a fully doxxed
                        team of yield-maxis working at the
                        intersection of marketing and development who can carry any web-based project from beginning to
                        end – all in one place.
                    </div>
                </a>
                <a href="https://www.vaporfi.io/" className="partnersImgContainer">
                    <img alt="" src={vapordexLogo} className="partnersImg"/>
                    <div className={"partnerDescription"}>VaporDEX is the world’s most rewarding DEX. 
                    Trade your crypto with less fees and more options to earn.
                    </div>
                </a>
            </div>
        </Container>
    );
}

export default Partners;
