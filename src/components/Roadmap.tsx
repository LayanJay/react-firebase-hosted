import Container from "react-bootstrap/Container";
import "./styles/Roadmap.scss";

function Roadmap() {
  return (
    <Container className="roadMap">
      <h1 className="roadMapTitle">ROADMAP</h1>

      <div className="roadMapFlexContainer">
        <div className="roadMapStep">
          <h2 className="roadMapHeader">01 Inital Investment</h2>
          <p className="roadMapText">
            After receiving a primary investment, Draft labs partnered with
            wisdom labs for early development and UI wireframe of draftables.
          </p>
        </div>
        <div className="roadMapStep">2</div>
        <div className="roadMapStep">3</div>
        <div className="roadMapStep">4</div>
        <div className="roadMapStep">5</div>
      </div>
    </Container>
  );
}

export default Roadmap;
