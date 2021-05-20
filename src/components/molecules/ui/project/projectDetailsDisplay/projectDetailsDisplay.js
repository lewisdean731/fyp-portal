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
            <Form.Control readOnly defaultValue={props.projectData.teamId} />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Last Scanned</Form.Label>
            <Form.Control
              readOnly
              defaultValue={new Date(
                props.projectData.lastScannedAt
              ).toLocaleString()}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Dependencies</Form.Label>
            <Form.Control
              readOnly
              defaultValue={
                props.projectData.projectDependencies.directDependencies.length
              }
            />
          </Form.Group>
          <Col />
        </Form.Row>
      </Form>
    </div>
  );
}

export default ProjectDetailsDisplay;
