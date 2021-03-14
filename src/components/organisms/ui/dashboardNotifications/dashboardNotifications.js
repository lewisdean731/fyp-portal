import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../atoms/text/medium/textMedium";
import DashboardNotificationItem from "../../../molecules/ui/dashboardNotificationItem/dashboardNotificationItem";
import Classes from "./dashboardNotifications.module.scss";

function dashboardNotifications() {
  return (
    <Container className={Classes.dashboardNotifications}>
      <TextMedium colour={"grey"}>Alerts</TextMedium>
      <Row className="justify-content-md-center">
        <Col className={Classes.col}>
          <DashboardNotificationItem
            textSeverity={"Critical"}
            textDetails={"'node-sass' is more than 6 months out of date"}
          />
          <DashboardNotificationItem
            textSeverity={"Warn"}
            textDetails={"'jest' is more than 3 months out of date"}
          />
          <DashboardNotificationItem
            textSeverity={"Warn"}
            textDetails={"'rails' is more than 3 months out of date"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default dashboardNotifications;
