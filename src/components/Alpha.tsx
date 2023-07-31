import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Alpha.scss";
import React from "react";

function Alpha() {
    return (
        <Container className="alphaContainer" id="alpha">
            <Container className="alphaAssets">
                <Button className="buttonGeneral buttonAlpha"
                        href={"https://docs.google.com/forms/d/1fToSysEHfRUr_N0Hjk8hIbSg6KrRkYAgHNo5En76pZI/edit"}>Apply
                    to Closed
                    Alpha Release</Button>
            </Container>
        </Container>
    );
}

export default Alpha;
