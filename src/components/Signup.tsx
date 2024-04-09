import Container from "react-bootstrap/Container";
import "./styles/Signup.scss";
import SignupForm from "./SignupForm";
import dotPattern1 from "../assets/dot_pattern_1.png";
import dotPattern2 from "../assets/dot_pattern_7.png";
import dotPattern3 from "../assets/dot_pattern_4.png";

function Signup() {
    return (
        <Container className="signup" id="signup">
            <img alt="Decorative dot pattern" src={dotPattern1} className="dotPatternContact"/>
            <img alt="Decorative dot pattern" src={dotPattern2} className="dotPatternContact2"/>
            <img alt="Decorative dot pattern" src={dotPattern3} className="dotPatternContact3"/>
            <div className="signupLeft">
                <h3 className="sectionTitle signupTitle">Draftables Early Access</h3>
                <p className={"signupText"}>
                    Please fill out the following information to sign up for Draftables Early Access. 
                </p>
            </div>
            <div className="signupRight">
                <SignupForm/>
            </div>
        </Container>
    );
}

export default Signup;
