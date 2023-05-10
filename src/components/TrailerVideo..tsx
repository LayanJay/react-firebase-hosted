import Container from "react-bootstrap/Container";
import "./styles/GameplayDemo.scss";
import rulerLeft from "../assets/landing_section/ruler_pattern_left.png";
import rulerRight from "../assets/landing_section/ruler_pattern_right.png";
import gameplayBg from "../assets/trailer_video/gameplay-bg.png";
import playNowButton from "../assets/trailer_video/play-now-button.png";
import gameTrailer from "../assets/trailer_video/game-trailer.mp4";

function TrailerVideo() {
    return (
        <Container className="gameplayDemoContainer" id="gameplay">
            <h2 className="sectionTitle">GAMEPLAY TRAILER</h2>
            <img alt="" src={rulerLeft} className="gameplayRulerLeft"/>
            <img alt="" src={rulerRight} className="gameplayRulerRight"/>
            {/*<a href="https://demo.draftables.io/" target={"_blank"}>
        <Container>
          <div className={"gameplayView"}>
            <img alt="" src={gameplayBg} className="gameplayViewBg" />
            <img alt="" src={playNowButton} className="gameplayButton" />
          </div>
        </Container>
      </a>*/}
            <Container>
                <div className={"gameplayView"}>
                    <video
                        width="100%"
                        height="100%"
                        controls
                        src={gameTrailer} // Replace with your video file path
                        className="gameplayVideo"
                    />
                </div>
            </Container>
        </Container>
    );
}

export default TrailerVideo;
