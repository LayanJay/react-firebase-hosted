import Container from "react-bootstrap/Container";
import "./styles/Roadmap.scss";
import dotPattern1 from "../assets/dot_pattern_1.png";
import dotPattern4 from "../assets/dot_pattern_4.png";

function Roadmap() {
    return (
        <Container className="roadMap" id="roadmap">
            <div className="backgroundAssets">
                <img alt="" src={dotPattern4} className="dotPatternRoadMap1"/>
                <img alt="" src={dotPattern1} className="dotPatternRoadMap2"/>
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
                        After receiving a primary investment from Acme Innovation, Draft Labs 
                        partnered with Wisdom Labs for early development, UI wireframe and 
                        ideation of draftables.
                        </p>
                        <p className="progressText">COMPLETE</p>
                    </div>
                    <div className="roadMapStep roadMapStepBackground1">
                        <div className="roadMapTitle">
                            <p className="roadMapNumber">02</p>
                            <p className="roadMapHeader">PRIVATE ALPHA</p>
                        </div>
                        <p className="roadMapText">
                        In October 2023, Draftables hosted a one week private alpha 
                        tournament for its earliest test users. A huge success, users 
                        were able to compete on the MVP for Draftables merch and 
                        (most importantly) bragging rights.
                        </p>
                        <p className="progressText">COMPLETE</p>
                    </div>
                    <div className="roadMapStep roadMapStepBackground1">
                        <div className="roadMapTitle">
                            <p className="roadMapNumber">03 </p>
                            <p className="roadMapHeader">IP PARTNERSHIPS</p>
                        </div>
                        <p className="roadMapText">
                            In Q4 2023, Draft Labs secured the rights to bring legacy WBD 
                            IP on-chain and into Draftables. This marked the completion of 
                            the first step of Draft Labs’ larger plans for sweeping Web2 and 
                            Web3 IP integration into its games.
                        </p>
                        <p className="progressText">COMPLETE</p>
                    </div>
                </div>
                <div className="roadMapInnerFlexContainer">
                    <div className="roadMapStep roadMapStepBackground2">
                        <div className="roadMapTitle">
                            <p className="roadMapNumber">04 </p>
                            <p className="roadMapHeader">MINT</p>
                        </div>
                        <p className="roadMapText">
                        Q2/3 will see the first on-chain Draftables assets. The mint, 
                        features Draftables athletes, LE cosmetics, in-game consumables, 
                        airdroped tokens, and much more. Want a hint to learn more? What 
                        is one of Draft Labs’ main pillars of game design?
                        </p>
                        <p className="progressText">LOADING...</p>
                    </div>
                    <div className="roadMapStep roadMapStepBackground2">
                        <div className="roadMapTitle">
                            <p className="roadMapNumber">05 </p>
                            <p className="roadMapHeader">IDO</p>
                        </div>
                        <p className="roadMapText">
                        During Q2/3 Draftables will be holding an IDO for its primary 
                        in-game currency, $DRFT. The $DRFT IDO is the first step to 
                        unlocking Draftables’ peer-to-peer economy that mimics 
                        real-world sports economics.
                        </p>
                        <p className="progressText">LOADING...</p>
                    </div>
                    <div className="roadMapStep roadMapStepBackground2">
                        <div className="roadMapTitle">
                            <p className="roadMapNumber">06 </p>
                            <p className="roadMapHeader">BETA RELEASE</p>
                        </div>
                        <p className="roadMapText">
                        Beta release will feature on-chain gameplay, PVP competition, 
                        new game modes, 3-5x times faster gameplay, and fully revamped 
                        UI. Beta release will be available on mobile and desktop 
                        platforms Q3/Q4 2024.
                        </p>
                        <p className="progressText">LOADING...</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Roadmap;
