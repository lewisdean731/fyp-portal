import { Row, Col, Form, Button } from "react-bootstrap";
import Classes from "./usernamePassword.module.scss"
export default function LoginUsernamePassword(props){
  return (
    <Row className={`${Classes.login} ${props.className}`}>
      <Col noGutters>
        <Form className={Classes.form}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label srOnly>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label srOnly>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit" className={Classes.wide}>
            Log In
          </Button>
          <hr />
          <Button variant="link" href={"fake.link"} className={Classes.wide}>
            Forgotten Password?
          </Button>
          <Button variant="primary" href={"fake.link"} className={Classes.wide}>
            Create Account
          </Button>
        </Form>
      </Col>
    </Row>
  )
}
