import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { createTeamInFirestore } from "../../../../../utils/apiUtil";
import Classes from "./createTeamForm.module.scss";

function CreateTeamForm(props) {
  const [teamName, setTeamName] = useState();
  const [formSubmitMsg, setFormSubmitMsg] = useState("");
  const [formSubmitMsgColour, setFormSubmitMsgColour] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setFormSubmitMsgColour("red");
    setFormSubmitMsg("");
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    if (form.checkValidity() === true) {
      await createTeamInFirestore(
        { name: teamName, uid: props.uid },
        props.token
      ).then(() => window.location.reload(""))
      .catch((error) => {
        setFormSubmitMsg(error);
      })
    }
  };

  return (
    <div>
      <Form 
        className={Classes.createTeam}
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Group as={Row}>
          <Form.Label srOnly>Name</Form.Label>
          <Col sm={5}>
            <Form.Control
              required
              placeholder={"Team Name"}
              onChange={(event) => setTeamName(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a team name.
            </Form.Control.Feedback>
          </Col>
          <Col sm={3}>
            <Button variant="primary" type="submit">
              Create New Team
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateTeamForm;
