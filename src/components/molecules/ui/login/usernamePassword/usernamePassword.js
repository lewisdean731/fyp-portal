import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import firebase from "firebase/app";
import Classes from "./usernamePassword.module.scss";

export default function LoginUsernamePassword(props) {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  return (
    <Row className={`${Classes.login} ${props.className}`}>
      <Col>
        <Form className={Classes.form}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label srOnly>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
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
                .signInWithEmailAndPassword(signInEmail, signInPassword);
            }}
          >
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
  );
}
