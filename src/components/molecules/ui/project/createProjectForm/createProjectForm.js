import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { createProjectInFirestore } from "../../../../../utils/apiUtil";
import Classes from "./createProjectForm.module.scss";

function CreateProjectForm(props) {
  const [projectName, setProjectName] = useState();
  const [projectType, setProjectType] = useState("npm");
  const [projectTeam, setProjectTeam] = useState(props.teamsData[0].teamId);
  const [npmPackageJsonUrl, setNpmPackageJsonUrl] = useState();
  const [npmPackageLockUrl, setNpmPackageLockUrl] = useState();
  const [yellowWarningPeriod, setYellowWarningPeriod] = useState(10);
  const [redWarningPeriod, setRedWarningPeriod] = useState(15);
  const [authUsername, setAuthUsername] = useState();
  const [authPassword, setAuthPassword] = useState();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    const projectData = {
      name: projectName,
      type: projectType,
      teamId: projectTeam,
      packageJsonUrl: npmPackageJsonUrl,
      packageLockUrl: npmPackageLockUrl,
      yellowWarningPeriod: yellowWarningPeriod,
      redWarningPeriod: redWarningPeriod,
      authUsername: authUsername,
      authPassword: authPassword,
    };
    createProjectInFirestore(projectData, props.token);
  };

  const projectTypeHandler = (value) => {
    if (value === "npm") {
      return (
        <div>
          <Form.Group as={Row}>
            <Form.Label column md={"3"}>
              Package.json URL
            </Form.Label>
            <Col>
              <Form.Control
                required
                type={"url"}
                pattern={"https://.*"}
                placeholder={"https://example.com/repository/package.json"}
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
            <Form.Label column md={"3"}>
              Package-lock.json URL
            </Form.Label>
            <Col>
              <Form.Control
                type={"url"}
                pattern={"https://.*"}
                required
                placeholder={"https://example.com/repository/package-lock.json"}
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
          <Form.Label column md={"3"}>
            Dependency File URL
          </Form.Label>
          <Form.Label column md={"4"}>
            Not yet implemented
          </Form.Label>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column md={"3"}>
            Lockfile URL
          </Form.Label>
          <Form.Label column md={"4"}>
            Not yet implemented
          </Form.Label>
        </Form.Group>
      </div>
    );
  };

  return (
    <div>
      <Form
        className={Classes.createProject}
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              placeholder={"Project Name"}
              onChange={(event) => {
                setProjectName(event.target.value);
              }}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a name for the project.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Project Type</Form.Label>
            <Form.Control
              as="select"
              defaultValue={"npm"}
              onChange={(event) => {
                projectTypeHandler(event.target.value);
                setProjectType(event.target.value);
              }}
            >
              <option key={"npm"}>npm</option>
              <option key={"other"}>Other Package Manager</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <br />
        {projectTypeHandler(projectType)}
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              placeholder={"Username / email for accessing the project repository"}
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
        <Form.Group as={Row}>
          <Form.Label column sm={1}>
            Team
          </Form.Label>
          <Col>
            {/* Split the team name and ID when setting the value, and only use the ID part */}
            <Form.Control
              as="select"
              onChange={(event) => {
                setProjectTeam(event.target.value.split(" - ")[1]);
              }}
            >
              {props.teamsData.map((team) => {
                return (
                  <option
                    key={team.teamId}
                  >{`${team.teamName} - ${team.teamId}`}</option>
                );
              })}
            </Form.Control>
          </Col>
          <Col />
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Flag dependencies as yellow
          </Form.Label>
          <Col md={2}>
            <Form.Control
              required
              pattern={"[0-9]*"}
              defaultValue={10}
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
              defaultValue={15}
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
        <Form.Row>
          <Form.Group as={Col} md={2}>
            <Button variant="primary" type="submit">
              Create Project
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}

export default CreateProjectForm;
