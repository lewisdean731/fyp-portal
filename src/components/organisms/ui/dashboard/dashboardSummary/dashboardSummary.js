import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import DashboardItem from "../../../../molecules/ui/dashboard/dashboardItem/dashboardItem";

import Classes from "./dashboardSummary.module.scss";

function DashboardSummary() {
  return (
    <Container className={Classes.dashboardSummary}>
      <TextMedium colour={"grey"}>At a Glance</TextMedium>
      <Row className="justify-content-md-center">
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"grey"}
            colour2={"black"}
            text1={10}
            text2={"Total Projects"}
          />
        </Col>
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"green"}
            colour2={"black"}
            text1={6}
            text2={"Green Projects"}
          />
        </Col>
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"yellow"}
            colour2={"black"}
            text1={3}
            text2={"Yellow Projects"}
          />
        </Col>
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"red"}
            colour2={"black"}
            text1={1}
            text2={"Red Projects"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardSummary;
