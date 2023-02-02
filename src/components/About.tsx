import Container from "react-bootstrap/Container";
import "./styles/About.scss";

function About() {
  return (
    <Container className="about" id="aboutus">
      <div className="aboutLeft">
        <img
          alt=""
          src="src/assets/aboutUs/aboutUs-img.png"
          className="aboutLeftImg"
        />
        <img
          alt=""
          src="src/assets/dot_pattern_2.png"
          className="dotPatternAbout"
        />
      </div>
      <div className="aboutRight">
        <h1 className="aboutRightTitle">About Draft Labs</h1>
        <h2 className="aboutRightSubtitle">A GameFi Company</h2>
        <p className="aboutRightText">
          Draft Labs is committed to integrating all aspects of Web3 into sports
          gaming. We help users monetize their time and skill unlike previously
          possible through our discrete blockchain integration and
          user-friendliness, developing a game template that anyone can enjoy
          while they "contribute-to-earn."
        </p>
        <div className="aboutRightSocials">
          <img
            alt=""
            src="src/assets/aboutUs/Vector-1.png"
            className="socialIcon"
          />
          <img
            alt=""
            src="src/assets/aboutUs/Vector-2.png"
            className="socialIcon"
          />
          <img
            alt=""
            src="src/assets/aboutUs/Vector.png"
            className="socialIcon"
          />
        </div>
      </div>
    </Container>
  );
}

export default About;
