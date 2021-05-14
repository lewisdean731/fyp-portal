import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import CreateTeamForm from "../../../../molecules/ui/team/createTeamForm/createTeamForm";

import Classes from "./createTeam.module.scss";

function CreateTeam(props) {
  return (
    <Container fluid className={Classes.createTeam}>
      <TextMedium colour={"grey"}>Create Team</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <CreateTeamForm uid={props.uid} token={props.token} />
        </Col>
      </Row>
    </Container>
  );
}

export default CreateTeam;
