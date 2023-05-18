import Container from "react-bootstrap/Container";
import "./styles/GameplayDemo.scss";
import rulerLeft from "../assets/landing_section/ruler_pattern_left.png";
import rulerRight from "../assets/landing_section/ruler_pattern_right.png";
import {useState, useEffect, useRef} from "react";

function TrailerVideo() {
    const [isIntersecting, setIntersecting] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isIntersecting) {
            videoRef.current && (videoRef.current.muted = false);
            videoRef.current && videoRef.current.play();
        } else {
            videoRef.current && videoRef.current.pause();
        }
    }, [isIntersecting]);

    return (
        <Container className="gameplayDemoContainer" id="gameplay">
            <h2 className="sectionTitle">GAMEPLAY TRAILER</h2>
            <img alt="" src={rulerLeft} className="gameplayRulerLeft"/>
            <img alt="" src={rulerRight} className="gameplayRulerRight"/>
            <Container>
                <div className={"gameplayView"}>
                    <video
                        ref={videoRef}
                        id="video-player-tag"
                        style={{backgroundColor: '#000', width: '100%', height: '100%', objectFit: 'cover', zIndex: '999', top:0, left: 0}}
                        className="video-player-tag" autoPlay loop muted playsInline controls
                        poster={"https://res.cloudinary.com/ds5c0o49f/image/upload/v1683596792/Screenshot_2023-05-09_at_07.16.00_j4lj6l.png"}
                        src="https://res.cloudinary.com/ds5c0o49f/video/upload/v1683596290/Draftables_Trailer_01_upohzz.mp4"
                        controlsList="nodownload"
                           onCanPlay={() => {
                                videoRef.current && videoRef.current.play();
                           }
                           }
                    />
                </div>
            </Container>
        </Container>

    );
}

export default TrailerVideo;
