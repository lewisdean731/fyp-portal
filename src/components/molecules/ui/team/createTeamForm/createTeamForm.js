import { Col, Row, Form, Button } from "react-bootstrap";
import Classes from "./createTeamForm.module.scss";

function CreateTeamForm(props) {
  return (
    <div>
      <Form className={Classes.createTeam}>
        <Form.Group as={Row}>
          <Form.Label srOnly>
            Name
          </Form.Label>
          <Col sm={3}>
            <Form.Control defaultValue={"Team Name"} />
          </Col>
          <Col sm={2}>
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
