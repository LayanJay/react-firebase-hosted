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
    // State to toggle showing more or less team members
    const [showMore, setShowMore] = useState(false);

    // Array of all team members
    const teamMembers = [
        { img: brian, name: "Brian Ross - CEO" },
        { img: simon, name: "Simon Peterson - COO" },
        { img: ian, name: "Ian Anderson - Game Design" },
        { img: rory, name: "Rory Reich - Product Design" },
        { img: stafford, name: "Stafford McIntyre - Game Design" },
        { img: alec, name: "Alec Lykken - Marketing" },
        { img: denise, name: "Denise K. Záles - Strategic Advisor" },
        { img: justin, name: "Justin Abernathy - Strategic Advisor" },
        { img: max, name: "Maxwell Cox - Project Manager" },
        { img: garrett, name: "Garrett - Position" }, // Add your details for Garrett
    ];

    // Determine which team members to display
    const displayedMembers = showMore ? teamMembers : teamMembers.slice(0, 4);

    return (
        <Container className="supportingTeam" id="ourteam">
            {/* Existing elements */}
            <h2 className="sectionTitle">OUR TEAM</h2>
            <div className="teamPictures">
                {/* Render displayed members */}
                {displayedMembers.map((member, index) => (
                    <a key={index} href="#" className="teamImgContainer"> {/* Update href as needed */}
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
