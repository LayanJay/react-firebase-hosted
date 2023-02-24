import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Alpha.scss";
import EmailForm from "./EmailForm";

function Alpha() {
  return (
    <Container className="alphaContainer" id="alpha">
      <Container className="alphaAssets">
        <h3 className="sectionTitle">Alpha Release</h3>
        <p>Sign up for access to Alpha Release
        </p>
      </Container>
      <EmailForm />
    </Container>
  );
}

export default Alpha;
