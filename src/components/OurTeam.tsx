import Container from "react-bootstrap/Container";
import "./styles/OurTeam.scss";
import dotPattern1 from "../assets/dot_pattern_4.png";
import dotPattern2 from "../assets/dot_pattern_7.png";
import dotPattern3 from "../assets/dot_pattern_1.png";
import bottomPattern from "../assets/partners/border_style_bottom.png";
import topPattern from "../assets/partners/border_style_top.png";
import brian from "../assets/ourteam/Brian.png";
import simon from "../assets/ourteam/Simon.png";
import ian from "../assets/ourteam/Ian.jpeg";
import alec from "../assets/ourteam/Alec.jpg";

function OurTeam() {
    return (
        <Container className="supportingTeam" id="team">
            <img alt="" src={dotPattern2} className="dotPatternPartnerMid"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack2"/>
            <img alt="" src={dotPattern3} className="dotPatternPartnerBack3"/>
            <img alt="" src={dotPattern1} className="dotPatternPartnerBack4"/>
            <h2 className="teamTitle">OUR TEAM</h2>
            <div className="teamImages">
                <img alt="" src={bottomPattern} className="dotPatternPartnerBot"/>
                <img alt="" src={topPattern} className="dotPatternPartnerTop"/>
                <a href="https://twitter.com/0xFlows" className="teamImgContainer">
                    <img alt="" src={brian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        CEO
                    </div>
                </a>
                <a href="https://twitter.com/0xSimn" className="teamImgContainer">
                    <img alt="" src={simon} className="teamImg"/>
                    <div className={"teamDescription"}>
                        COO
                    </div>
                </a>
                <a href="https://twitter.com/0xWorkhorse" className="teamImgContainer">
                    <img alt="" src={ian} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Game Design
                    </div>
                </a>
                <a href="#" className="teamImgContainer">
                    <img alt="" src={alec} className="teamImg"/>
                    <div className={"teamDescription"}>
                        Marketing
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
