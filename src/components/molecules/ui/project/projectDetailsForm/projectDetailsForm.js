import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { updateProjectInFirestore } from "../../../../../utils/apiUtil";
import TextSmall from "../../../../atoms/text/small/textSmall";
import Classes from "./projectDetailsForm.module.scss";

function ProjectDetailsForm(props) {
  const [projectName, setProjectName] = useState(props.projectData.projectName);
  const [projectType, setProjectType] = useState(
    Object.keys(props.projectData.projectType)[0]
  );
  const [npmPackageJsonUrl, setNpmPackageJsonUrl] = useState(
    props.projectData.projectType["npm"].packageJsonUrl
  );
  const [npmPackageLockUrl, setNpmPackageLockUrl] = useState(
    props.projectData.projectType["npm"].packageLockUrl
  );
  const [yellowWarningPeriod, setYellowWarningPeriod] = useState(
    Math.round(props.projectData.yellowWarningPeriod / 8.64e7)
  );
  const [redWarningPeriod, setRedWarningPeriod] = useState(
    Math.round(props.projectData.redWarningPeriod / 8.64e7)
  );
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
        projectName: projectName,
        projectType: projectType,
        packageJsonUrl: npmPackageJsonUrl,
        packageLockUrl: npmPackageLockUrl,
        yellowWarningPeriod: yellowWarningPeriod,
        redWarningPeriod: redWarningPeriod,
      };
      updateProjectInFirestore(projectId, projectData, props.token)
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
                onChange={(event) => {
                  setNpmPackageJsonUrl(event.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid URL.
              </Form.Control.Feedback>
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
                onChange={(event) => {
                  setNpmPackageLockUrl(event.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid URL.
              </Form.Control.Feedback>
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
              onChange={(event) => {
                setProjectName(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name.
            </Form.Control.Feedback>
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
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Flag dependencies as yellow
          </Form.Label>
          <Col md={2}>
            <Form.Control
              required
              pattern={"[0-9]*"}
              defaultValue={yellowWarningPeriod}
              onChange={(event) => {
                setYellowWarningPeriod(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Col>
          <Form.Label column sm={1.5}>
            days out of date
          </Form.Label>
          <Col />
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Flag dependencies as red
          </Form.Label>
          <Col md={2}>
            <Form.Control
              required
              pattern={"[0-9]*"}
              defaultValue={redWarningPeriod}
              onChange={(event) => {
                setRedWarningPeriod(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a number.
            </Form.Control.Feedback>
          </Col>
          <Form.Label column sm={1.5}>
            days out of date
          </Form.Label>
          <Col />
        </Form.Group>
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
