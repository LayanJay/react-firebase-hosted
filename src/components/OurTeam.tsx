import React, { useState } from "react"; // Import useState
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/OurTeam.scss";

// Import images
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
    const [showMore, setShowMore] = useState(false);

    const teamMembers = [
        { img: brian, name: "Brian Ross - CEO", url: "https://twitter.com/0xFlows" },
        { img: simon, name: "Simon Peterson - COO", url: "https://twitter.com/0xSimn" },
        { img: ian, name: "Ian Anderson - Game Design", url: "https://twitter.com/0xWorkhorse" },
        { img: rory, name: "Rory Reich - Product Design", url: "https://www.roryreich.com/" },
        { img: stafford, name: "Stafford McIntyre - Game Design", url: "https://twitter.com/McIntyreHOTS" },
        { img: alec, name: "Alec Lykken - Marketing", url: "https://www.linkedin.com/in/alec-lykken-41716631/" },
        { img: denise, name: "Denise K. Záles - Strategic Advisor", url: "https://www.linkedin.com/in/denise-zales/" },
        { img: justin, name: "Justin Abernathy - Strategic Advisor", url: "https://www.linkedin.com/in/justinabernathy/" },
        { img: max, name: "Maxwell Cox - Project Manager", url: "https://www.linkedin.com/in/maxwell-cox-b167a5bb/" },
    ];

    const displayedMembers = showMore ? teamMembers : teamMembers.slice(0, 4);

    return (
        <Container className="supportingTeam" id="ourteam">
            <h2 className="sectionTitle">OUR TEAM</h2>
            <div className="teamPictures">
                {displayedMembers.map((member, index) => (
                    <a key={index} href={member.url} className="teamImgContainer" target="_blank" rel="noopener noreferrer">
                        <img alt="" src={member.img} className="teamImg"/>
                        <div className="teamDescription">
                            {member.name}
                        </div>
                    </a>
                ))}
            </div>
            <div>
                <Button onClick={() => setShowMore(!showMore)} className="buttonGeneral buttonGeneralSignup">
                    {showMore ? "LESS" : "MORE"}
                </Button>
            </div>
        </Container>
    );
}

export default OurTeam;
