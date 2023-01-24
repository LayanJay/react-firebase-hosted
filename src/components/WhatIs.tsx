import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function WhatIs() {
  return (
    <Container className="whatIsContainer">
      <h1 className="ownYourTeam">OWN. YOUR. TEAM.</h1>
      <Container className="whatIsInnerContainer">
        <div className="whatIsAssets">
          <img
            alt=""
            src="src\assets\ownyourteam\american_football.png"
            className="whatIsImage"
          />
          <img
            alt=""
            src="src\assets\ownyourteam\american_football_2.png"
            className="whatIsImage whatIsImageMain"
          />
          <img
            alt=""
            src="src\assets\ownyourteam\american_football_3.png"
            className="whatIsImage"
          />
          <img
            alt=""
            src="src\assets\ownyourteam\vs.png"
            className="whatIsImage"
          />
        </div>
        <img
          alt=""
          src="src\assets\dot_pattern_1.png"
          className="dotPatternWhatIs"
        />
        <img
          alt=""
          src="src\assets\dot_pattern_1.png"
          className="dotPatternWhatIs2"
        />
        <img
          alt=""
          src="src\assets\dot_pattern_2.png"
          className="dotPatternWhatIs3"
        />
        <div className="landingButton">
          <h1 className="buttonText">
            Experience the height of sports emulation
          </h1>
          <Button className="buttonAlpha">LITEPAPER</Button>
        </div>
      </Container>
    </Container>
  );
}

export default WhatIs;
