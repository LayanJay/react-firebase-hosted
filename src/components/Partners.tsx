import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function Partners() {
  return (
    <Container className="supportingPartners">
      <h1 className="partnersTitle">SUPPORTING PARTNERS</h1>
      <div className="partnersLogos">
        <img
          alt=""
          src="src\assets\partners\img-1.png"
          className="partnersImg"
        />
        <img
          alt=""
          src="src\assets\partners\img-2.png"
          className="partnersImg"
        />
      </div>
      <div>
        <Button className="buttonAlpha">MORE</Button>
      </div>
    </Container>
  );
}

export default Partners;
