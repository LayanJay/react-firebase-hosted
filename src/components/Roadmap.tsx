import Container from "react-bootstrap/Container";
import "./styles/Roadmap.scss";
import dotPattern1 from "../assets/dot_pattern_1.png";
import dotPattern2 from "../assets/dot_pattern_5.png";
import dotPattern4 from "../assets/dot_pattern_4.png";

function Roadmap() {
    return (
        <Container className="roadMap" id="roadmap">
            <div className="backgroundAssets">
                <img alt="" src={dotPattern4} className="dotPatternRoadMap1"/>
                <img alt="" src={dotPattern1} className="dotPatternRoadMap2"/>
                <img alt="" src={dotPattern2} className="dotPatternRoadMap3"/>
                <img alt="" src={dotPattern4} className="dotPatternRoadMap4"/>
                {/* <img alt="" src={arrow1} className="roadMapArrow1" />
        <img alt="" src={arrow1} className="roadMapArrow2" />
        <img alt="" src={arrow1} className="roadMapArrow3" />
        <img alt="" src={arrow1} className="roadMapArrow5" />
        <img alt="" src={arrow3} className="roadMapArrow4" /> */}
            </div>
            <h2 className="sectionTitle">ROADMAP</h2>
            <div className="roadMapFlexContainer">
                <div className="roadMapInnerFlexContainer">
                    <div className="roadMapStep roadMapStepBackground1">
                        <div className="roadMapTitle">
                            <p className="roadMapNumber">01 </p>
                            <p className="roadMapHeader">FUNDING</p>
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
                            <p className="roadMapHeader">PRIVATE ALPHA</p>
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
                        <p className="roadMapText">Alpha is the first step to fully realizing the Draftables mission.
                            From the creation of in-game currency to minting players and enabling users to build their
                            teams, Alpha builds a core piece of what's to come. Alpha stage enables users to begin
                            interacting with the Draftables ecosystem.</p>
                    </div>
                </div>
                <div className="roadMapInnerFlexContainer">
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
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Roadmap;
