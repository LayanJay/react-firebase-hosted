import Container from "react-bootstrap/Container";
import "./styles/OurTeam.scss";
import dotPattern1 from "../assets/dot_pattern_4.png";
import dotPattern2 from "../assets/dot_pattern_7.png";
import dotPattern3 from "../assets/dot_pattern_1.png";
import bottomCorner from "../assets/partners/border_style_bottom.png";
import topCorner from "../assets/partners/border_style_top.png";
import brian from "../assets/ourteam/Brian.png";
import simon from "../assets/ourteam/Simon.png";
import ian from "../assets/ourteam/Ian.jpeg";
import alec from "../assets/ourteam/Alec.jpg";

function OurTeam() {
    return (
        <Container className="supportingTeam" id="support">
            <img alt="" src={dotPattern2} className="dotPatternPartnerMid"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack2"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack3"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack4"/>
            <h2 className="sectionTitle">OUR TEAM</h2>
            <div className="teamPictures">
                <img alt="" src={bottomCorner} className="bottomCorner"/>
                <img alt="" src={topCorner} className="topCorner"/>
                <a href="https://www.wisdom.gg/labs" className="teamImgContainer">
                    <img alt="" src={brian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Brian Ross - CEO
                    </div>
                </a>
                <a href="https://www.acmeinnovation.com/" className="teamImgContainer">
                    <img alt="" src={simon} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Simon Peterson - COO
                    </div>
                </a>
                <a href="https://www.avax.network/" className="teamImgContainer">
                    <img alt="" src={ian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Ian Anderson - Game Design
                    </div>
                </a>
                <a href="https://www.vaporfi.io/" className="teamImgContainer">
                    <img alt="" src={alec} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Alec Lykken - Marketing
                    </div>
                </a>
                <a href="https://www.wisdom.gg/labs" className="teamImgContainer">
                    <img alt="" src={brian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Brian Ross - CEO
                    </div>
                </a>
                <a href="https://www.acmeinnovation.com/" className="teamImgContainer">
                    <img alt="" src={simon} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Simon Peterson - COO
                    </div>
                </a>
                <a href="https://www.avax.network/" className="teamImgContainer">
                    <img alt="" src={ian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Ian Anderson - Game Design
                    </div>
                </a>
                <a href="https://www.vaporfi.io/" className="teamImgContainer">
                    <img alt="" src={alec} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Alec Lykken - Marketing
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
