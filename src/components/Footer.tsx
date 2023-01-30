import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container className="footer">
      <img
        alt=""
        src="src\assets\footer\footer_logo.png"
        className="footerLogo"
      />
      <div className="footerContent">
        <div className="footerLeft">
          <h3 className="footerHeaders">About Us</h3>
        </div>
        <div className="footerMiddle">
          <h3 className="footerHeaders">Contact Info</h3>
        </div>
        <div className="footerRight">
          <h3 className="footerHeaders">Blog & Newsletter</h3>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
