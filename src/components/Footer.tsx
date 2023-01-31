import Container from "react-bootstrap/Container";
import "./styles/Footer.scss";

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
          <li>About Draftables</li>
          <li>Contact us</li>
          <li>Help Center</li>
          <li>Blogs</li>
          <li>Career</li>
        </div>
        <div className="footerMiddle">
          <h3 className="footerHeaders">Contact Info</h3>
          <li>About Draftables</li>
          <li>Contact us</li>
          <li>Help Center</li>
          <li>Blogs</li>
          <li>Career</li>
        </div>
        <div className="footerRight">
          <h3 className="footerHeaders">Newsletter</h3>
          <li>About Draftables</li>
          <li>Contact us</li>
          <li>Help Center</li>
          <li>Blogs</li>
          <li>Career</li>
        </div>
      </div>
      <div className="copyrightSocials">
        <div className="copyrightRight">
          <p>Copyright ©2023 All Rights Reserved | DRAFT LABS</p>
        </div>
        <div className="copyrightLeft">
          <img
            alt=""
            src="src\assets\aboutUs\Vector-1.png"
            className="socialIcon"
          />
          <img
            alt=""
            src="src\assets\aboutUs\Vector-2.png"
            className="socialIcon"
          />
          <img
            alt=""
            src="src\assets\aboutUs\Vector.png"
            className="socialIcon"
          />
        </div>
      </div>
    </Container>
  );
}

export default Footer;
