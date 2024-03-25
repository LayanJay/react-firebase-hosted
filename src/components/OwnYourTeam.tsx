import React from "react";
import Container from "react-bootstrap/Container";
import "./styles/OwnYourTeam.scss";
import dotPattern1 from "../assets/dot_pattern_1.png";
import oytFootball1 from "../assets/ownyourteam/american_football.png";
import oytFootball2 from "../assets/ownyourteam/american_football_2.png";
import oytFootball3 from "../assets/ownyourteam/american_football_3.png";
import oytFootball4 from "../assets/ownyourteam/lightpaper.png";
import dotPattern5 from "../assets/dot_pattern_5.png";
import dotPattern6 from "../assets/dot_pattern_6.png";
import chevronRight from "../assets/chevron-right.png";


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
          <img alt="" src={dotPattern1} className="dotPatternOyt"/>
          <img alt="" src={dotPattern1} className="dotPatternOyt2"/>
          <img src={dotPattern5} alt="" className={"dotPatterRight"}/>
          <img src={dotPattern6} alt="" className={"dotPatterRightBottom"}/>
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
                Draftables, the quicker your team will develop.
              </p>
            </div>
          </div>

          <div>
            <div className="oytImage">
              <div className="">
                <img alt="" src={oytFootball2} className="whatIsImage"/>
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
              <img src={oytFootball3} className="whatIsImage" alt=""/>
              <p className="imageParagraph">BUILD YOUR OWN STADIUM VILLAGE</p>
              <p className="imageParagraphHover">
                Build your franchise from the ground up. Upgrade your team’s facilities and grow your stadium village to
                boost your team’s performance.
              </p>
            </div>
          </div>

          <div>
            <div className="oytImage">
              <img src={oytFootball4} className="whatIsImage" alt=""/>
              <p className="imageParagraph">READ OUR LITEPAPER</p>
              <p className="imageParagraphHover">
                Draftables expands what it means for a game to be a sports
                simulator. Explore all of the ways Draftables is changing the
                game in our litepaper.

                <div className={"litepaperBtnContainer"}>
                  <a href="https://draft-labs.gitbook.io/draftables-litepaper/"
                     className={"litepaperBtn"} target="_blank">
                    LITEPAPER
                    <img src={chevronRight} className={"chevronRightImg"} alt=""/>
                  </a>
                </div>

              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default OwnYourTeam;
