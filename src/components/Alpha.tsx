import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./styles/Alpha.scss";

function Alpha() {
  return (
    <Container className="alphaContainer">
      <Container className="alphaAssets">
        <h1 className="alphaText">Alpha Release</h1>
        <h2 className="alphaDescription">
          Sign up for access to Alpha Release
        </h2>
      </Container>
      <div className="alphaForm">
        <input
          className="alphaFormField"
          type="text"
          name="email"
          placeholder="Example@gmail.com"
        />
        <Button className="buttonGeneral buttonGeneralSignup">SIGN UP</Button>
      </div>
    </Container>
  );
}

export default Alpha;
