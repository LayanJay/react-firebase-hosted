import Container from "react-bootstrap/Container";
import "./styles/About.scss";
import aboutUsImg from "../assets/aboutUs/aboutUs-img.png";
import dotPattern2 from "../assets/dot_pattern_2.png";
import linkedinLogo from "../assets/linkedin-logo.svg";
import redditLogo from "../assets/reddit-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";

function About() {
  return (
    <Container className="about" id="aboutus">
      <div className="aboutLeft">
        <img alt="" src={aboutUsImg} className="aboutLeftImg" />
        <img alt="" src={dotPattern2} className="dotPatternAbout" />
      </div>
      <div className="aboutRight">
        <h1 className="aboutRightTitle">About Draft Labs</h1>
        <h2 className="aboutRightSubtitle">The company behind Draftables</h2>
        <p className="aboutRightText">
          Draft Labs is committed to integrating all aspects of Web3 into sports
          gaming. We help users monetize their time and skill unlike previously
          possible through our discrete blockchain integration and
          user-friendliness, developing a game template that anyone can enjoy
          while they "contribute-to-earn."
        </p>
        <div className="aboutRightSocials">
          <img alt="" src={twitterLogo} className="socialIcon" />
          <img alt="" src={linkedinLogo} className="socialIcon" />
          <img alt="" src={redditLogo} className="socialIcon" />
        </div>
      </div>
    </Container>
  );
}

export default About;
