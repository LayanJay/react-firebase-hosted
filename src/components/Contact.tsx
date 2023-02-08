import Container from "react-bootstrap/Container";
import "./styles/Contact.scss";
import ContactForm from "./ContactForm";
import dotPattern1 from "../assets/dot_pattern_1.png";
import dotPattern2 from "../assets/dot_pattern_2.png";

function Contact() {
  return (
    <Container className="contact" id="contact">
      <img alt="" src={dotPattern1} className="dotPatternContact" />
      <img alt="" src={dotPattern1} className="dotPatternContact1" />
      <img alt="" src={dotPattern2} className="dotPatternContact2" />
      <img alt="" src={dotPattern2} className="dotPatternContact3" />
      <div className="contactLeft">
        <h1 className="contactTalk">Hey! Let's Talk</h1>
        <p className="contactSubTalk">
          Have any questions or want to get in contact?
        </p>
      </div>
      <div className="contactRight">
        <ContactForm />
      </div>
    </Container>
  );
}

export default Contact;
