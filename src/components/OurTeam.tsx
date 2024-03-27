import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
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
import rory from "../assets/ourteam/Rory.jpg";
import stafford from "../assets/ourteam/Stafford.jpeg";
import denise from "../assets/ourteam/Denise.jpg";
import justin from "../assets/ourteam/Justin.jpg";
import max from "../assets/ourteam/Max.png";
import garrett from "../assets/ourteam/Garrett.jpeg";

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
                <a href="https://twitter.com/0xFlows" className="teamImgContainer">
                    <img alt="" src={brian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Brian Ross - CEO
                    </div>
                </a>
                <a href="https://twitter.com/0xSimn" className="teamImgContainer">
                    <img alt="" src={simon} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Simon Peterson - COO
                    </div>
                </a>
                <a href="https://twitter.com/0xWorkhorse" className="teamImgContainer">
                    <img alt="" src={ian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Ian Anderson - Game Design
                    </div>
                </a>
                <a href="https://www.roryreich.com/" className="teamImgContainer">
                    <img alt="" src={rory} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Rory Reich - Product Design
                    </div>
                </a>
                <a href="https://twitter.com/mcintyrehots" className="teamImgContainer">
                    <img alt="" src={stafford} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Stafford McIntyre - Game Design
                    </div>
                </a>
                <a href="https://www.vaporfi.io/" className="teamImgContainer">
                    <img alt="" src={alec} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Alec Lykken - Marketing
                    </div>
                </a>
                <a href="https://known.online/" className="teamImgContainer">
                    <img alt="" src={denise} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Denise K. Záles - Strategic Advisor
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/justinabernathy/" className="teamImgContainer">
                    <img alt="" src={justin} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Justin Abernathy - Strategic Advisor
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/maxwell-cox-b167a5bb/" className="teamImgContainer">
                    <img alt="" src={max} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Maxwell Cox - Project Manager
                    </div>
                </a>
            </div>
            {<div>
                <Button className="buttonGeneral buttonGeneralSignup">MORE</Button>
            </div>}
        </Container>
    );
}

export default OurTeam;
