import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Alpha.scss";
import React from "react";
import discordLogo from "../assets/discord-logo.svg";

function Alpha() {
    return (
        <Container className="alphaContainer" id="alpha">
            <Container className="alphaAssets">
                <div>Join Our</div>
                <div className={"alphaSubContainer"}>
                    <Button className="buttonGeneral buttonAlpha"
                            href={"https://discord.gg/BfJ8VcgfA5"}>
                        <img alt="" src={discordLogo} className="discordIcon"/>
                        Discord
                    </Button>
                    Community
                </div>
            </Container>
        </Container>
    );
}

export default Alpha;
