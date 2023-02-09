import Container from "react-bootstrap/Container";
import "./styles/GameplayDemo.scss";
import rulerLeft from "../assets/landing_section/ruler_pattern_left.png";
import rulerRight from "../assets/landing_section/ruler_pattern_right.png";
import gameplayBg from "../assets/gameplay_demo/gameplay-bg.png";
import playNowButton from "../assets/gameplay_demo/play-now-button.png";

function GameplayDemo() {
    return (
        <Container className="gameplayDemoContainer" id="gameplay">
            <img alt="" src={rulerLeft} className="gameplayRulerLeft"/>
            <img alt="" src={rulerRight} className="gameplayRulerRight"/>
                    <a href="https://demo.draftables.io/" target={'_blank'}>
            <Container>
                <div className={'gameplayView'}>
                    <img alt="" src={gameplayBg} className="gameplayViewBg"/>
                        <img alt="" src={playNowButton} className="gameplayButton"/>
                </div>
            </Container>
                    </a>
        </Container>
    );
}

export default GameplayDemo;
