import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { updateProjectInFirestore } from "../../../../../utils/apiUtil";
import TextSmall from "../../../../atoms/text/small/textSmall";
import Classes from "./projectDetailsForm.module.scss";

function ProjectDetailsForm(props) {
  const [projectName, setProjectName] = useState(props.projectData.projectName)
  const [projectType, setProjectType] = useState(
    Object.keys(props.projectData.projectType)[0]
  );
  const [npmPackageJsonUrl, setNpmPackageJsonUrl] = useState(
    props.projectData.projectType["npm"].packageJsonUrl
  );
  const [npmPackageLockUrl, setNpmPackageLockUrl] = useState(
    props.projectData.projectType["npm"].packageLockUrl
  );
  const [validated, setValidated] = useState(false);
  const [formSubmitMsg, setFormSubmitMsg] = useState("");
  const [formSubmitMsgColour, setFormSubmitMsgColour] = useState("");

  const { projectId } = useParams(); // Gets project ID from URL

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    setValidated(true);
    if (form.checkValidity() === true) {
      const projectData = {
        projectName: projectName,
        projectType: projectType,
        packageJsonUrl: npmPackageJsonUrl,
        packageLockUrl: npmPackageLockUrl,
      };
      updateProjectInFirestore(projectId, projectData, props.token)
      .then(() => {
        setFormSubmitMsgColour("green");
        setFormSubmitMsg("Details updated successfully");
      })
      .catch((error) => {
        setFormSubmitMsgColour("red");
        setFormSubmitMsg(error.message);
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const projectTypeHandler = (value) => {
    if (value === "npm") {
      return (
        <div>
          <Form.Group as={Row}>
            <Form.Label column md={"2"}>
              Package.json URL
            </Form.Label>
            <Col>
              <Form.Control 
                type={"url"}
                pattern={"https://.*"}
                required
                defaultValue={npmPackageJsonUrl}
                onChange={(event) => {setNpmPackageJsonUrl(event.target.value)}}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={"2"}>
              Package-lock.json URL
            </Form.Label>
            <Col>
              <Form.Control 
                type={"url"}
                pattern={"https://.*"}
                required
                defaultValue={npmPackageLockUrl} 
                onChange={(event) => {setNpmPackageLockUrl(event.target.value)}}
              />
            </Col>
          </Form.Group>
        </div>
      );
    }
    return (
      <div>
        <Form.Group as={Row}>
          <Form.Label column md={"2"}>
            Dependency File URL
          </Form.Label>
          <Form.Label column md={"2"}>
            Not yet implemented
          </Form.Label>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={"2"}>
            Lockfile URL
          </Form.Label>
          <Form.Label column md={"2"}>
            Not yet implemented
          </Form.Label>
        </Form.Group>
      </div>
    );
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
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              defaultValue={projectName}
              onChange={(event) => {setProjectName(event.target.value)}}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Project Type</Form.Label>
            <Form.Control
              as="select"
              defaultValue={projectType}
              onChange={(event) => {
                projectTypeHandler(event.target.value);
                setProjectType(event.target.value);
              }}
            >
              <option>npm</option>
              <option>Other Package Manager</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <br />
        {projectTypeHandler(projectType)}
        <br />
        <TextSmall colour={formSubmitMsgColour}>{formSubmitMsg}</TextSmall>
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
