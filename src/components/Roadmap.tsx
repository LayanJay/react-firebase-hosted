import Container from "react-bootstrap/Container";
import "./styles/Roadmap.scss";

function Roadmap() {
  return (
    <Container className="roadMap" id="roadmap">
      <div className="backgroundAssets">
        <img
          alt=""
          src="src/assets/dot_pattern_1.png"
          className="dotPatternRoadMap1"
        />
        <img
          alt=""
          src="src/assets/dot_pattern_1.png"
          className="dotPatternRoadMap2"
        />
        <img
          alt=""
          src="src/assets/dot_pattern_1.png"
          className="dotPatternRoadMap4"
        />
        <img
          alt=""
          src="src/assets/roadmap/arrow1.png"
          className="roadMapArrow1"
        />
        <img
          alt=""
          src="src/assets/roadmap/arrow1.png"
          className="roadMapArrow2"
        />
        <img
          alt=""
          src="src/assets/roadmap/arrow1.png"
          className="roadMapArrow3"
        />
        <img
          alt=""
          src="src/assets/roadmap/arrow1.png"
          className="roadMapArrow5"
        />
        <img
          alt=""
          src="src/assets/roadmap/arrow3.png"
          className="roadMapArrow4"
        />

        <img
          alt=""
          src="src/assets/dot_pattern_2.png"
          className="dotPatternRoadMap3"
        />
      </div>
      <h1 className="roadMapSection">ROADMAP</h1>
      <div className="roadMapFlexContainer">
        <div className="roadMapInnerFlexContainerTop">
          <div className="roadMapStep roadMapStepBackground1">
            <div className="roadMapTitle">
              <p className="roadMapNumber">01 </p>
              <p className="roadMapHeader">INITAL INVESTMENT</p>
            </div>
            <p className="roadMapText">
              After receiving a primary investment, Draft labs partnered with
              wisdom labs for early development and UI wireframe of draftables.
            </p>
            <p className="progressText">COMPLETE</p>
          </div>
          <div className="roadMapStep roadMapStepBackground1">
            <div className="roadMapTitle">
              <p className="roadMapNumber">02</p>
              <p className="roadMapHeader">MVP DEVELOPMENT</p>
            </div>
            <p className="roadMapText">
              Draft Labs is currently developing a minimum viable product that
              will give potential users a preview of the gameplay experience.
              During this stage of development, Draftables is building an
              initial community of passionate fans.
            </p>
            <p className="progressText">IN PROGRESS</p>
          </div>
          <div className="roadMapStep roadMapStepBackground2">
            <div className="roadMapTitle">
              <p className="roadMapNumber">03 </p>
              <p className="roadMapHeader">ALPHA RELEASE</p>
            </div>
            <p className="roadMapText">
              Alpha is the first step to fully realizing the Draftables mission.
              From the creation of in-game currency to minting players and
              enabling users to build their teams, Alpha builds a core piece of
              what's to come. Alpha stage enables users to begin interacting
              with the Draftables ecosystem.
            </p>
            <p className="progressTextSoon">SOON</p>
          </div>
        </div>
        <div className="roadMapInnerFlexContainerBot">
          <div className="roadMapStep roadMapStepBackground2">
            <div className="roadMapTitle">
              <p className="roadMapNumber">04 </p>
              <p className="roadMapHeader">BETA RELEASE</p>
            </div>
            <p className="roadMapText">
              beta release will allow users to begin competing against each
              other, as well as fully experiencing the draftables gameplay loop.
              The primary goal for beta is to prepare for mass market adoption
              through responding to community feedback and refining the gameplay
              features.
            </p>
            <p className="progressTextSoon">SOON</p>
          </div>
          <div className="roadMapStep roadMapStepBackground2">
            <div className="roadMapTitle">
              <p className="roadMapNumber">05 </p>
              <p className="roadMapHeader">DRAFTABLES V1.0</p>
            </div>
            <p className="roadMapText">
              Although draftables will never have a “final” release, V1.0 will
              have all Platform components available publicly via desktop and
              mobile.
            </p>
            <p className="progressTextSoon">SOON</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Roadmap;
