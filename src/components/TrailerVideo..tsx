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
            <Container>
                <div className={"gameplayView"}>
                    <video
                        id="video-player-tag"
                        style={{backgroundColor: '#000', width: '100%', height: '100%', objectFit: 'cover', zIndex: '9999', top:0, left: 0}}
                        className="video-player-tag" playsInline loop controls
                        poster={"https://res.cloudinary.com/ds5c0o49f/image/upload/v1683596792/Screenshot_2023-05-09_at_07.16.00_j4lj6l.png"}
                        src="https://res.cloudinary.com/ds5c0o49f/video/upload/v1683596290/Draftables_Trailer_01_upohzz.mp4"
                        controlsList="nodownload"
                    />
                </div>
            </Container>
        </Container>

    );
}

export default TrailerVideo;
