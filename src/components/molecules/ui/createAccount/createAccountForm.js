import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import firebase from "firebase/app";
import Classes from "./createAccountForm.module.scss";
import TextMedium from "../../../atoms/text/medium/textMedium";
import LoginErrors from "../../login/loginErrors/loginErrors";

export default function CreateAccountForm(props) {
  const [validated, setValidated] = useState(false)
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userConfirmPassword, setUserConfirmPassword] = useState();
  const [errMessage, setErrMessage] = useState();
  const [errCode, setErrCode] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // Don't reload the page
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      if (userPassword !== userConfirmPassword) {
        setErrMessage("New password and confirmation must match");
      } else {
        console.log('Creating account')
        firebase.auth().createUserWithEmailAndPassword(
          userEmail,
          userPassword
        ).then(() => {
          const user = firebase.auth().currentUser;
          console.log('updating account name')
          user.updateProfile({
              displayName: userName
          }).then(() =>{
            console.log('user name updated')
            window.location.replace("")
          })
        })
        .catch((error) => {
          console.log(error.message)
          setErrMessage(error.message);
          setErrCode(error.code)
        });
      }
    }
    setValidated(true);

  };


  return (
    <div className={Classes.createAccount}>
      <TextMedium>Create Account</TextMedium>
      <Form 
        onSubmit={handleSubmit}
        noValidate
        validated={validated}>
        <Form.Group>
          <Form.Row>
              <Col>
                <Form.Control
                  required
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                  placeholder="Name"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control
                  required
                  type={"email"}
                  pattern={".+@+.+."}
                  onChange={(event) => {
                    setUserEmail(event.target.value);
                  }}
                  placeholder="Email Address"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email address.
                </Form.Control.Feedback>
              </Col>
          </Form.Row>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Row>
              <Col md={6}>
                <Form.Control
                  required
                  onChange={(event) => {
                    setUserPassword(event.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Button type="submit">Create Account</Button>
              </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
              <Col md={6}>
                <Form.Control
                  required
                  type="password"
                  onChange={(event) => {
                    setUserConfirmPassword(event.target.value);
                  }}
                  placeholder="Confirm Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please confirm your password.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <LoginErrors errMessage={errMessage} errCode={errCode}/>
              </Col>
          </Form.Row>
        </Form.Group>
      </Form>
      </div>
  );
}
