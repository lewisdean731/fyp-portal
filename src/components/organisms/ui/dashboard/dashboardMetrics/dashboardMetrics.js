import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import { PieChart } from "../../../../atoms/ui/chart/pie/pie";
import Classes from "./dashboardMetrics.module.scss";

function DashboardMetrics() {
  return (
    <Container className={Classes.dashboardMetrics}>
      <TextMedium colour={"grey"}>Metrics</TextMedium>
      <Row className="justify-content-md-center">
        <Col className={Classes.col}>
          <PieChart />
        </Col>
        <Col className={Classes.col}>
          <PieChart />
        </Col>
        <Col className={Classes.col}>
          <PieChart />
        </Col>
        <Col className={Classes.col}>
          <PieChart />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardMetrics;
