import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Alpha.scss";
import React from "react";

function Alpha() {
    return (
        <Container className="alphaContainer" id="alpha">
            <Container className="alphaAssets">
                <div className={"alphaText"}><span className={"alphaClickText"}>Click</span> to apply for the</div>
                <Button className="buttonGeneral buttonAlpha">Closed Alpha Release</Button>
            </Container>
        </Container>
    );
}

export default Alpha;
