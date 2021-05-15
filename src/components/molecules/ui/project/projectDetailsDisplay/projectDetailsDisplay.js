import { Col, Form } from "react-bootstrap";
import Classes from "./projectDetailsDisplay.module.scss";

function ProjectDetailsDisplay(props) {

  return (
    <div>
      <Form className={Classes.projectDetailsDisplay}>
        <Form.Row>
          <Col />
          <Form.Group as={Col} md={3}>
            <Form.Label>Parent Team ID</Form.Label>
            <Form.Control
              readOnly
              defaultValue={props.projectData.teamid}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Last Scanned</Form.Label>
            <Form.Control
              readOnly
              defaultValue={"Data does not exist yet"}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Dependencies</Form.Label>
            <Form.Control
              readOnly
              defaultValue={props.projectData.projectDependencies.directDependencies.length}
            />
          </Form.Group>
          <Col />
        </Form.Row>
      </Form>
    </div>
  );
}

export default ProjectDetailsDisplay;
