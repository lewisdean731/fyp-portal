import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import DashboardNotificationsDisplay from "../../../../molecules/ui/dashboard/dashboardNotificationsDisplay/dashboardNotificationsDisplay";
import Classes from "./dashboardNotifications.module.scss";

function dashboardNotifications(props) {
  return (
    <Container className={Classes.dashboardNotifications}>
      <TextMedium colour={"grey"}>Notifications</TextMedium>
      <Row className="justify-content-md-center">
        <Col className={Classes.col}>
          <DashboardNotificationsDisplay
            notificationsData={props.notificationsData}
            token={props.token}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default dashboardNotifications;
