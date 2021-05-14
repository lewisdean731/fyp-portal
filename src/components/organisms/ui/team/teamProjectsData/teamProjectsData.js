import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import TeamProjectsDisplay from "../../../../molecules/ui/team/teamProjectsDisplay/teamProjectsDisplay";

import Classes from "./teamProjectsData.module.scss";

function TeamProjectsData(props) {
  return (
    <Container fluid className={Classes.teamProjectsData}>
      <TextMedium colour={"grey"}>Projects</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <TeamProjectsDisplay projectsData={props.projectsData} />
        </Col>
      </Row>
    </Container>
  );
}

export default TeamProjectsData;
