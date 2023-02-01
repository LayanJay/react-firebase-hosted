import Container from "react-bootstrap/Container";
import "./styles/Contact.scss";

function Contact() {
  return (
    <Container className="contact" id="contact">
      <div className="contactLeft">
        <h1 className="contactTalk">Hey! Let's Talk</h1>
        <p className="contactSubTalk">
          Have any questions or want to get in contact?
        </p>
      </div>
      <div className="contactRight">
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
        <p>FORM HERE</p>
      </div>
    </Container>
  );
}

export default Contact;
