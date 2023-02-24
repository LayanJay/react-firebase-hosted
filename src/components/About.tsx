import Container from "react-bootstrap/Container";
import "./styles/About.scss";
import aboutUsImg from "../assets/aboutUs/aboutUs-img.png";
import dotPattern2 from "../assets/dot_pattern_2.png";
import linkedinLogo from "../assets/linkedin-logo.svg";
import redditLogo from "../assets/reddit-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";
import mediumLogo from "../assets/medium-logo.svg";

function About() {
  return (
    <Container className="about" id="aboutus">
      <div className="aboutLeft">
        <img alt="" src={aboutUsImg} className="aboutLeftImg" />
        <img alt="" src={dotPattern2} className="dotPatternAbout" />
      </div>
      <div className="aboutRight">
        <h3 className="sectionTitle">About Draft Labs</h3>
        <h4 className="subtitle">The company behind Draftables</h4>
        <p>
          Draft Labs is committed to integrating all aspects of Web3 into sports
          gaming. We help users monetize their time and skill unlike previously
          possible through our discrete blockchain integration and
          user-friendliness, developing a game template that anyone can enjoy
          while they "contribute-to-earn."
        </p>
        <div className="aboutRightSocials">
          <a href="https://twitter.com/draftables" target="_blank">
            <img alt="" src={twitterLogo} className="socialIcon" />
          </a>
          <a href="https://www.linkedin.com/company/draftlabs" target="_blank">
            <img alt="" src={linkedinLogo} className="socialIcon" />
          </a>
          <a href="https://www.reddit.com/r/Draftables/" target="_blank">
            <img alt="" src={redditLogo} className="socialIcon" />
          </a>
          <a href="https://draftables.medium.com/" target="_blank">
            <img alt="" src={mediumLogo} className="socialIcon" />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default About;
