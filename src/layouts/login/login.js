import { Container, Row, Col } from "react-bootstrap";
import TextMedium from "../../components/atoms/text/medium/textMedium";
import LoginUsernamePassword from "../../components/molecules/ui/login/usernamePassword/usernamePassword";
import Classes from "./login.module.scss";

export default function Login(props) {
  return (
    <Container className={Classes.container}>
      <Row className={Classes.logoBlurb}>
        <Col>
          <img src="logo200.png" />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextMedium colour={"grey"} className={Classes.loginMessage}>
            Please Login to Continue
          </TextMedium>
        </Col>
      </Row>
      <Row className={`${Classes.login} ${"justify-content-md-center"}`}>
        <Col>
          <LoginUsernamePassword className={Classes.usernamePassword} />
        </Col>
      </Row>
    </Container>
  );
}
