import Container from "react-bootstrap/Container";

function Alpha() {
  return (
    <Container className="alphaContainer">
      <Container className="alphaAssets">
        <h1 className="alphaText">Alpha Release</h1>
        <h2 className="alphaDescription">
          Sign up for access to Alpha Release
        </h2>
      </Container>
      <Container className="alphaForm">
        <form className="alphaSignup">
          <label>
            <input
              className="alphaFormField"
              type="text"
              name="email"
              placeholder="Example@gmail.com"
            />
          </label>
          <input
            className="buttonAlpha buttonAlphaSignup"
            type="submit"
            value="Sign Up"
          />
        </form>
      </Container>
    </Container>
  );
}

export default Alpha;
