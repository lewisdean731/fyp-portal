import { Col, Row, Form, Button } from "react-bootstrap";
import Classes from "./teamOptionsForm.module.scss";

function TeamOptionsForm(props) {
  return (
    <div>
      <Form className={Classes.teamOptions}>
        <Form.Group as={Row}>
          <Form.Label column sm={1}>
            Name
          </Form.Label>
          <Col sm={3}>
            <Form.Control readOnly defaultValue={props.teamData.teamName} />
          </Col>
          <Col sm={2}>
            <Button variant="primary" type="submit" disabled>
              Update Details
            </Button>
          </Col>
          <Form.Label column sm={2}>
            Delete Project
          </Form.Label>
          <Col sm={2}>
            <Button variant="danger" type="submit" disabled>
              Delete Project?
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default TeamOptionsForm;
