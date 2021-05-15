import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { findRenderedDOMComponentWithTag } from "react-dom/test-utils";
import Classes from "./projectDetailsForm.module.scss";

function ProjectDetailsForm(props) {
  const [projectType, setProjectType] = useState(Object.keys(props.projectData.projectType)[0]);
  const [npmPackageJsonUrl, setNpmPackageJsonUrl] = useState(props.projectData.projectType["npm"].packageJsonUrl);
  const [npmPackageLockUrl, setNpmPackageLockUrl] = useState(props.projectData.projectType["npm"].packageLockUrl);

  const projectTypeHandler = (value) => { 
    if(value === "npm") {
      return (
        <div>
            <Form.Group as={Row}>
              <Form.Label column md={"2"}>Package.json URL</Form.Label>
              <Col>
                <Form.Control
                  readOnly
                  defaultValue={npmPackageJsonUrl}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={"2"}>Package-lock.json URL</Form.Label>
              <Col>
                <Form.Control
                  readOnly
                  defaultValue={npmPackageLockUrl}
                />
              </Col>
            </Form.Group>
        </div>
      )
    }
    return (
      <div>
          <Form.Group as={Row}>
            <Form.Label column md={"2"}>Dependency File URL</Form.Label>
            <Form.Label column md={"2"}>Not yet implemented</Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={"2"}>Lockfile URL</Form.Label>
            <Form.Label column md={"2"}>Not yet implemented</Form.Label>
          </Form.Group>
      </div>
    )
    
  }

  return (
    <div>
      <Form className={Classes.projectDetails}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              readOnly
              defaultValue={props.projectData.projectName}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Project Type</Form.Label>
            <Form.Control as="select" defaultValue={projectType} onChange={(event) => {
              projectTypeHandler(event.target.value)
              setProjectType(event.target.value)
              }}>
              <option>npm</option>
              <option>Other Package Manager</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <br />
        {projectTypeHandler(projectType)}
        <br />
        <Form.Row>
          <Form.Group as={Col}>
            <Button variant="primary" type="submit">
              Update Details
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default ProjectDetailsForm;
