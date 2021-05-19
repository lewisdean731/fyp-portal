import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import firebase from "firebase/app";
import Classes from "./usernamePassword.module.scss";
import LoginErrors from "../../../../molecules/login/loginErrors/loginErrors";

export default function LoginUsernamePassword(props) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [errCode, setErrCode] = useState("");
  return (
    <Row className={`${Classes.login} ${props.className}`}>
      <Col>
        <Form className={Classes.form}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label srOnly>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={(event) => setSignInEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label srOnly>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setSignInPassword(event.target.value)}
            />
          </Form.Group>
          <Button
            variant="success"
            className={Classes.wide}
            onClick={() => {
              firebase
                .auth()
                .signInWithEmailAndPassword(signInEmail, signInPassword)
                .catch((error) => {
                  setErrMessage(error.message);
                  setErrCode(`(${error.code})`);
                });
            }}
          >
            Log In
          </Button>
          <br />
          <LoginErrors errMessage={errMessage} errCode={errCode} />
          <hr />
          <Button variant="link" href={"fake.link"} className={Classes.wide}>
            Forgotten Password?
          </Button>
          <Button
            variant="primary"
            href={"fake.link"}
            className={Classes.wide}
            onClick={(event) => props.clicked(event)}
          >
            Create Account
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
