import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { createTeamInFirestore } from "../../../../../utils/apiUtil";
import Classes from "./createTeamForm.module.scss";

function CreateTeamForm(props) {
  const [teamName, setTeamName] = useState ()

  const submitFormHandler = async (teamName) => {
    await createTeamInFirestore({name: teamName, uid: props.uid}, props.token)
  }

  return (
    <div>
      <Form className={Classes.createTeam}>
        <Form.Group as={Row}>
          <Form.Label srOnly>
            Name
          </Form.Label>
          <Col sm={3}>
            <Form.Control defaultValue={"Team Name"} onChange={(event) => setTeamName(event.target.value)}/>
          </Col>
          <Col sm={2}>
            <Button 
              variant="primary"
              type="submit"
              onClick={async () => await submitFormHandler(teamName)}>
              Create New Team
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateTeamForm;
