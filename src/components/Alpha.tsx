import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Alpha.scss";
import EmailForm from "./EmailForm";

function Alpha() {
  return (
    <Container className="alphaContainer" id="alpha">
      <Container className="alphaAssets">
        <h1 className="alphaText">Alpha Release</h1>
        <h2 className="alphaDescription">
          Sign up for access to Alpha Release
        </h2>
      </Container>
      <EmailForm />
    </Container>
  );
}

export default Alpha;
