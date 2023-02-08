import Container from "react-bootstrap/Container";
import "./styles/GameplayDemo.scss";
import rulerLeft from "../assets/landing_section/ruler_pattern_left.png";
import rulerRight from "../assets/landing_section/ruler_pattern_right.png";

function GameplayDemo() {
    return (
        <Container className="gameplayDemoContainer" id="gameplay">
            <h1 className="gameplayDemoTitle">GAMEPLAY DEMO</h1>
            <img alt="" src={rulerLeft} className="gameplayRulerLeft"/>
            <img alt="" src={rulerRight} className="gameplayRulerRight"/>
        </Container>
    );
}

export default GameplayDemo;
