import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import firebase from "firebase/app";
import Classes from "./googleLogin.module.scss";
import LoginErrors from "../../../login/loginErrors/loginErrors";
import TextSmall from "../../../../atoms/text/small/textSmall";

export default function GoogleLogin(props) {
  const [errMessage, setErrMessage] = useState("");
  const [errCode, setErrCode] = useState("");

  const provider = new firebase.auth.GoogleAuthProvider();

  function handleGoogleSignIn() {
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        window.location.replace("")
      }).catch((error) => {
        // Handle Errors here.
        setErrCode(error.code);
        setErrMessage(error.message);
      });
  }

  return (
    <div className={`${Classes.login} ${props.className}`}>
      <Row >
        <Col>
          <TextSmall>Third Party Provider Login</TextSmall>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button 
            variant="primary" 
            className={Classes.wide}
            onClick={() => handleGoogleSignIn()}
          >
            Sign in with Google
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <LoginErrors errMessage={errMessage} errCode={errCode} />
        </Col>
      </Row>
      <br />
    </div>
  );
}
