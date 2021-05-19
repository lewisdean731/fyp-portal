import { useState } from "react";
import firebase from "firebase/app";
import { Row, Col, Form, Button } from "react-bootstrap";
import TextSmall from "../../../../atoms/text/small/textSmall";
import Classes from "./deleteProjectForm.module.scss";
import { deleteProjectInFirestore } from "../../../../../utils/apiUtil";
import { useParams } from "react-router";

function DeleteProjectForm() {
  const { projectId } = useParams(); // Gets project ID from URL
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState();
  const [errorContent, setErrorContent] = useState();
  const [buttonContent, setButtonContent] = useState(
    <Button variant="danger" type="submit">
      Delete Project
    </Button>
  );

  const handleSubmit = (event) => {
    // Don't reload the page
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      const user = firebase.auth().currentUser;
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        password
      );
      user
      .reauthenticateWithCredential(credential)
      .then(() => {
        setButtonContent(
          <Button
            variant="danger"
            onClick={() => {
              deleteProjectForRealHandler(user);
            }}
          >
            Really?
          </Button>
        );
      })
      .catch((error) => setErrorContent(error.message));
      
    }
    setValidated(true);
  };

  // Delete and redirect to projects page
  const deleteProjectForRealHandler = (user) => {
    setErrorContent("Deleting...");
    user.getIdToken()
    .then((token) => {
      deleteProjectInFirestore(projectId, token)
      .then(() => {window.location.replace("/projects")})
    })
    .catch((error) => setErrorContent(error.message));
  };

  return (
    <div>
      <Form
        className={Classes.deleteProject}
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

export default DeleteProjectForm;
