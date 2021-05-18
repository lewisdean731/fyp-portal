import { useState } from "react";
import firebase from "firebase/app";
import { Row, Col, Form, Button } from "react-bootstrap";
import TextSmall from "../../../../atoms/text/small/textSmall";
import Classes from "./userOptionsForm.module.scss";

function UserOptionsForm() {
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState();
  const [errorContent, setErrorContent] = useState();
  const [buttonContent, setButtonContent] = useState(
    <Button variant="danger" type="submit">
      Delete My Account
    </Button>
  );

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      // Don't reload the page
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // Don't reload the page
    event.preventDefault();
    event.stopPropagation();

    console.log("deleteUser button clicked");
    setButtonContent(
      <Button
        variant="danger"
        onClick={() => {
          deleteUserForRealHandler();
        }}
      >
        Really?
      </Button>
    );
  };

  const deleteUserForRealHandler = () => {
    console.log("deleteUserForReal button clicked");
    setErrorContent("Deleting...");
    const user = firebase.auth().currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );
    user
      .reauthenticateWithCredential(credential)
      .then(() => {
        user
          .delete()
          .then(() => window.location.replace(""))
          .catch((error) => setErrorContent(error.message));
      })
      .catch((error) => setErrorContent(error.message));
  };

  return (
    <div>
      <Form
        className={Classes.personalDetails}
        noValidate
        onSubmit={handleSubmit}
        validated={validated}
      >
        <Row className={"justify-content-md-center"}>
          <Col md={4}>
            <Form.Group>
              <Form.Control
                required
                type="password"
                placeholder="password"
                onChange={(event) => setPassword(event.target.value)}
                xs="auto"
              />
              <Form.Control.Feedback type="invalid">
                Please enter your password.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={3}>{buttonContent}</Col>
        </Row>
      </Form>
      <TextSmall colour={"red"}>{errorContent}</TextSmall>
    </div>
  );
}

export default UserOptionsForm;
