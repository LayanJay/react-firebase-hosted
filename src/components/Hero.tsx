import Container from "react-bootstrap/Container";
import "./styles/Hero.scss";
import dotPattern5 from "../assets/dot_pattern_5.png";
import rulerLeft from "../assets/landing_section/ruler_pattern_left.png";
import rulerRight from "../assets/landing_section/ruler_pattern_right.png";
import landingSlogan from "../assets/landing_section/slogan-text.png";
import landingLogo from "../assets/landing_section/draftable_logo.png";

function Hero() {
    return (
        <Container className="heroContainer">
            <div className="backgroundAssets">
                <img src={dotPattern5} alt="" className={"dotPatterLeft"}/>
                <img alt="" src={rulerLeft} className="heroRulerLeft"/>
                <img alt="" src={rulerRight} className="heroRulerRight"/>
                <img src={dotPattern5} alt="" className={"dotPatterRight"}/>
            </div>
            <div className="landingAssets">
                <div className="landingLogos">
                    <img alt="" src={landingSlogan} className="landingLogo"/>
                    <img alt="" src={landingLogo} className="landingLogo"/>
                </div>
                <div className="landingButton">
                    <h1 className="buttonText">
                        Experience the height of sports emulation
                    </h1>
                </div>
            </div>
        </Container>
    );
}

export default Hero;
