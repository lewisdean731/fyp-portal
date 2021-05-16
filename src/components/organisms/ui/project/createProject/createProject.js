import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import CreateProjectForm from "../../../../molecules/ui/project/createProjectForm/createProjectForm";

import Classes from "./createProject.module.scss";

function CreateProject(props) {
  return (
    <Container fluid className={Classes.createProject}>
      <TextMedium colour={"grey"}>Create Project</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          {/* <CreateProjectForm uid={props.uid} token={props.token} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default CreateProject;
