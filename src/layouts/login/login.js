import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TextMedium from "../../components/atoms/text/medium/textMedium";
import CreateAccountForm from "../../components/molecules/ui/createAccount/createAccountForm";
import LoginUsernamePassword from "../../components/molecules/ui/login/usernamePassword/usernamePassword";
import Classes from "./login.module.scss";

export default function Login(props) {
  const [showCreateAccount, setShowCreateAccount] = useState(false)

  const createAccountButtonHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowCreateAccount(true)
  }

  return (
    <Container className={Classes.container}>
      <Row className={Classes.logoBlurb}>
        <Col>
          <img src="/logo200.png" alt="logo" />
        </Col>
      </Row>
      <Row className={`${Classes.login} ${"justify-content-md-center"}`}>
        <Col>
          <TextMedium colour={"grey"} className={Classes.loginMessage}>
            Please Login to Continue
          </TextMedium>
        </Col>
        <Col>
          <LoginUsernamePassword className={Classes.usernamePassword} clicked={createAccountButtonHandler}/>
        </Col>
      </Row>
      {showCreateAccount ? 
      <Row className="justify-content-md-center">
        <Col>
          <CreateAccountForm />
        </Col>
      </Row>
      : null
      }
    </Container>
  );
}
