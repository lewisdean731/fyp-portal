import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Classes from "./createProjectForm.module.scss";

function CreateProjectForm(props) {
  const [projectName, setProjectName] = useState();
  const [projectType, setProjectType] = useState("npm");
  const [projectTeam, setProjectTeam] = useState(props.teamsData[0].teamId);
  const [npmPackageJsonUrl, setNpmPackageJsonUrl] = useState();
  const [npmPackageLockUrl, setNpmPackageLockUrl] = useState();
  

  const projectTypeHandler = (value) => { 
    if(value === "npm") {
      return (
        <div>
            <Form.Group as={Row}>
              <Form.Label column md={"3"}>Package.json URL</Form.Label>
              <Col>
                <Form.Control
                  required 
                  placeholder={"https://example.com/repository/package.json"} 
                  onChange={(event) => {
                    setNpmPackageJsonUrl(event.target.value)
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md={"3"}>Package-lock.json URL</Form.Label>
              <Col>
                <Form.Control
                  required 
                  placeholder={"https://example.com/repository/package-lock.json"} 
                  onChange={(event) => {
                    setNpmPackageLockUrl(event.target.value)
                  }}
                />
              </Col>
            </Form.Group>
        </div>
      )
    }
    return (
      <div>
          <Form.Group as={Row}>
            <Form.Label column md={"3"}>Dependency File URL</Form.Label>
            <Form.Label column md={"4"}>Not yet implemented</Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column md={"3"}>Lockfile URL</Form.Label>
            <Form.Label column md={"4"}>Not yet implemented</Form.Label>
          </Form.Group>
      </div>
    )
  }

  return (
    <div>
      <Form className={Classes.createProject}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required 
              placeholder={"Project Name"}
              onChange={(event) => {
                setProjectName(event.target.value)
              }}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Project Type</Form.Label>
            <Form.Control as="select" defaultValue={"npm"} onChange={(event) => {
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
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Team</Form.Label>
          <Col>
            {/* Split the team name and ID when setting the value, and only use the ID part */}
            <Form.Control as="select" onChange={(event) => {setProjectTeam(event.target.value.split(" - ")[1])}}>
              {props.teamsData.map((team) => {
                  return(
                    <option>{`${team.teamName} - ${team.teamId}`}</option>
                  )
                })
              }
            </Form.Control>
          </Col>
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
