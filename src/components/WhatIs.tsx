import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function WhatIs() {
  return (
    <Container className="whatIsContainer">
      <h1 className="ownYourTeam">OWN. YOUR. TEAM.</h1>
      <h2 className="generalText">
        Draftables is the most customizable, rewarding, and in-depth sports
        simulator of all time. You no longer have to pretend to be a football
        franchise owner — you are one.
      </h2>
      <Container className="whatIsInnerContainer">
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
        <div className="whatIsAssets">
          <img
            alt=""
            src="src\assets\ownyourteam\american_football.png"
            className="whatIsImage"
          />
          <div className="gradientBackground">
            <img
              alt=""
              src="src\assets\ownyourteam\vs.png"
              className="whatIsImage whatIsImageMain"
            />
          </div>
          <img
            alt=""
            src="src\assets\ownyourteam\american_football_3.png"
            className="whatIsImage"
          />
          <img
            alt=""
            src="src\assets\ownyourteam\american_football_2.png"
            className="whatIsImage"
          />
        </div>
        <div className="landingButton">
          <h2 className="generalText">
            Draftables aims to fully realize the potential of sports simulators.
            Experience unlimited control, true ownership, season-to-season
            continuity, and a lively community. Draftables is a fun,
            free-to-play game that solves the issues with current sports video
            games.
          </h2>
          <Button className="buttonAlpha">LITEPAPER</Button>
        </div>
      </Container>
    </Container>
  );
}

export default WhatIs;
