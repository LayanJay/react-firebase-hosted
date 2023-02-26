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
      <h2 className="sectionTitle">OWN. YOUR. TEAM.</h2>
      <p className="oytDescription">
        Draftables is the most customizable, rewarding, and in-depth sports
        simulator of all time. You no longer have to pretend to be a football
        franchise owner — you are one.
      </p>
      <div className="oytInnerContainer">
        <img alt="" src={dotPattern1} className="dotPatternOyt" />
        <img alt="" src={dotPattern1} className="dotPatternOyt2" />
        {/* <div className="oytAssets">
          <div className="oytImage">
            <img src={oytFootball1} className="whatIsImage" alt="" />
            <p className="imageParagraph">
              <span>SCOUT AND TRAIN YOUR DIGITAL ATHLETES</span>
            </p>
            <p className="imageParagraph imageParagraphHover">
              <span>
                Each digital athlete's skill, abilities, and development are
                fully reliant on their owner's ability to train and compete with
                them. This means that the more interactive you are with
                Draftables, the quicker your team will develop
              </span>
            </p>
          </div>

          <div className="oytImage">
            <div className="">
              <img alt="" src={oytVs} className="whatIsImage" />
            </div>
            <p className="imageParagraph">
              <span>
                COMPETE AGAINST OTHER USERS
              </span>
            </p>
            <p className="imageParagraph imageParagraphHover">
              <span>
                Compete against other Draftables users in head to head matches.
                To make it to the playoffs and championship matches you will
                have to be the best of the best.
              </span>
            </p>
          </div>

          <div className="oytImage">
            <img src={oytFootball3} className="whatIsImage" alt="" />
            <p className="imageParagraph">
              <span>EARN $DRAFT TO BENEFIT YOU AND YOUR TEAM</span>
            </p>
            <p className="imageParagraph imageParagraphHover">
              <span>
                $DRFT is more than just an in-game currency: Earn it by
                competing against other users, spend it to purchase new players
                and facilities, and sell it to other users when you don't need
                it!
              </span>
            </p>
          </div>

          <div className="oytImage">
            <img src={oytFootball2} className="whatIsImage" alt="" />
            <p className="imageParagraph">
              <span>
                <br></br>READ OUR LITEPAPER
              </span>
            </p>
            <p className="imageParagraph imageParagraphHover">
              <span>
                Draftables expands what it means for a game to be a sports
                simulator. Explore all of the ways Draftables is changing the
                game in our litepaper.
              </span>
            </p>
          </div>
        </div> */}


        <div className="oytAssets">
          <div>
            <div className="oytImage">
              <img src={oytFootball1} className="whatIsImage" alt="" />
              <p className="imageParagraph">SCOUT AND TRAIN YOUR DIGITAL ATHLETES
              </p>
              <p className="imageParagraphHover">
                Each digital athlete's skill, abilities, and development are
                fully reliant on their owner's ability to train and compete with
                them. This means that the more interactive you are with
                Draftables, the quicker your team will develop
              </p>
            </div>
          </div>

          <div>
            <div className="oytImage">
              <div className="">
                <img alt="" src={oytVs} className="whatIsImage" />
              </div>
              <p className="imageParagraph">COMPETE AGAINST OTHER USERS
              </p>
              <p className="imageParagraphHover">
                Compete against other Draftables users in head to head matches.
                To make it to the playoffs and championship matches you will
                have to be the best of the best.
              </p>
            </div>
          </div>

          <div>
            <div className="oytImage">
              <img src={oytFootball3} className="whatIsImage" alt="" />
              <p className="imageParagraph">EARN $DRAFT TO BENEFIT YOU AND YOUR TEAM
              </p>
              <p className="imageParagraphHover">
                $DRFT is more than just an in-game currency: Earn it by
                competing against other users, spend it to purchase new players
                and facilities, and sell it to other users when you don't need
                it!
              </p>
            </div>
          </div>

          <div>
            <div className="oytImage">
              <img src={oytFootball2} className="whatIsImage" alt="" />
              <p className="imageParagraph">READ OUR LITEPAPER</p>
              <p className="imageParagraphHover">
                Draftables expands what it means for a game to be a sports
                simulator. Explore all of the ways Draftables is changing the
                game in our litepaper.
              </p>
            </div>
          </div>
        </div>

        <div className="oytLitePaper" id="litepaper">
          <p className="oytDescription">
            Draftables aims to fully realize the potential of sports simulators.
            Experience unlimited control, true ownership, season-to-season
            continuity, and a lively community. Draftables is a fun,
            free-to-play game that solves the issues with current sports video
            games.
          </p>
          {/* 
          <div className="litepaperEmbed">
            <object
              data={litepaper}
              type="application/pdf"
              width="100%"
              height="100%"
              className="litepaperLink"
            ></object>
          </div>
  */}
          <div className="litepaperButton">
            <a href={litepaper} target="_blank">
              <Button className="buttonGeneral">LITEPAPER</Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OwnYourTeam;
