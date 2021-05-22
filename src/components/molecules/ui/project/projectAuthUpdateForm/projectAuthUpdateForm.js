import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { updateProjectCredentialsInFirestore } from "../../../../../utils/apiUtil";
import TextSmall from "../../../../atoms/text/small/textSmall";
import Classes from "./projectAuthUpdateForm.module.scss";

function ProjectAuthUpdateForm(props) {
  const [authUsername, setAuthUsername] = useState();
  const [authPassword, setAuthPassword] = useState();
  const [validated, setValidated] = useState(false);
  const [formSubmitMsg, setFormSubmitMsg] = useState("");
  const [formSubmitMsgColour, setFormSubmitMsgColour] = useState("");

  const { projectId } = useParams(); // Gets project ID from URL

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === true) {
      const projectData = {
        authUsername: authUsername,
        authPassword: authPassword,
      };
      updateProjectCredentialsInFirestore(projectId, projectData, props.token)
        .then(() => {
          setFormSubmitMsgColour("green");
          setFormSubmitMsg("Details updated successfully");
          // Reload page
          window.location.replace("");
        })
        .catch((error) => {
          setFormSubmitMsgColour("red");
          setFormSubmitMsg(error.message);
        });
    }
  };
  return (
    <div>
      <Form
        className={Classes.projectDetails}
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              placeholder={
                "Username / email for accessing the project repository"
              }
              onChange={(event) => {
                setAuthUsername(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a username / email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder={"Password for accessing the project repository"}
              onChange={(event) => {
                setAuthPassword(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <br />
        <TextSmall colour={formSubmitMsgColour}>{formSubmitMsg}</TextSmall>
        <Form.Row>
          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Update Credentials
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default ProjectAuthUpdateForm;
