import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./styles/OwnYourTeam.scss";
import dotPattern1 from "../assets/dot_pattern_1.png";
import oytFootball1 from "../assets/ownyourteam/american_football.png";
import oytFootball2 from "../assets/ownyourteam/american_football_2.png";
import oytFootball3 from "../assets/ownyourteam/american_football_3.png";
import oytVs from "../assets/ownyourteam/vs.png";
import litepaper from "../assets/litepaper.pdf";

let lightpaperPDFLink = JSON.stringify(litepaper);
let lightpaperPDFLinkFinal =
  lightpaperPDFLink + "#toolbar=0&navpanes=0&scrollbar=0";

function OwnYourTeam() {
  return (
    <Container className="oytContainer" id="whatis">
      <h1 className="oytTitle">OWN. YOUR. TEAM.</h1>
      <p className="oytDescription">
        Draftables is the most customizable, rewarding, and in-depth sports
        simulator of all time. You no longer have to pretend to be a football
        franchise owner — you are one.
      </p>
      <Container className="oytInnerContainer">
        <img alt="" src={dotPattern1} className="dotPatternOyt" />
        <img alt="" src={dotPattern1} className="dotPatternOyt2" />
        <div className="oytAssets">
          <img alt="" src={oytFootball1} className="whatIsImage" />
          <div className="gradientBackground">
            <img alt="" src={oytVs} className="whatIsImage whatIsImageMain" />
          </div>
          <img alt="" src={oytFootball3} className="whatIsImage" />
          <img alt="" src={oytFootball2} className="whatIsImage" />
        </div>
        <div className="oytLitePaper" id="litepaper">
          <p className="oytDescription">
            Draftables aims to fully realize the potential of sports simulators.
            Experience unlimited control, true ownership, season-to-season
            continuity, and a lively community. Draftables is a fun,
            free-to-play game that solves the issues with current sports video
            games.
          </p>
          <div className="litepaperEmbed">
            <object
              data={litepaper}
              type="application/pdf"
              width="100%"
              height="100%"
              className="litepaperLink"
            ></object>
          </div>
          <div className="litepaperButton">
            <a href={litepaper} target="_blank">
              <Button className="buttonGeneral">LITEPAPER</Button>
            </a>
          </div>

          {/*<FsLightbox*/}
          {/*  toggler={toggler}*/}
          {/*  sources={[*/}
          {/*    //@ts-ignore*/}
          {/*    <iframe title={'LITEPAPER'} src={litepaper} width="1920px" height="1080px" />,*/}
          {/*  ]}*/}
          {/*/>*/}
        </div>
      </Container>
    </Container>
  );
}

export default OwnYourTeam;
