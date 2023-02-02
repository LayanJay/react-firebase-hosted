import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/GameplayDemo.scss";

function GameplayDemo() {
  return (
    <Container className="gameplayDemoContainer" id="gameplay">
      <h1 className="gameplayDemoTitle">GAMEPLAY DEMO</h1>
      <img
        alt=""
        src="/src/assets/landing_section/ruler_pattern_right.png"
        className="gameplayRulerLeft"
      />
      <img
        alt=""
        src="/src/assets/landing_section/ruler_pattern_right.png"
        className="gameplayRulerRight"
      />
    </Container>
  );
}

export default GameplayDemo;
