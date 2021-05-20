import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import Classes from "./dashboardNotifications.module.scss";

function dashboardNotifications() {
  return (
    <Container className={Classes.dashboardNotifications}>
      <TextMedium colour={"grey"}>Notifications</TextMedium>
      <Row className="justify-content-md-center">
        <Col className={Classes.col}>

        </Col>
      </Row>
    </Container>
  );
}

export default dashboardNotifications;
