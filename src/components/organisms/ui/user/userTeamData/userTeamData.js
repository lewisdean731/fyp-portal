import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import UserDetailsForm from "../../../../molecules/ui/user/userDetailsForm/userDetailsForm";
import UserPasswordForm from "../../../../molecules/ui/user/userPasswordForm/userPasswordForm";
import UserTeamsDisplay from "../../../../molecules/ui/user/userTeamsDisplay/userTeamsDisplay";

import Classes from "./userTeamData.module.scss";

function UserTeamData(props) {
  
  return (
    <Container fluid className={Classes.userTeamData}>
      <TextMedium colour={"grey"}>Teams</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <UserTeamsDisplay teams={props.userFirestoreData.teams} />
        </Col>
      </Row>
    </Container>
  );
}

export default UserTeamData;
