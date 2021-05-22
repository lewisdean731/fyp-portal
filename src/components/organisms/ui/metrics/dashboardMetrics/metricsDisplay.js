import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import { PieChart } from "../../../../atoms/ui/chart/pie/pie";
import Classes from "./metricsDisplay.module.scss";

function MetricsDisplay() {
  return (
    <Container className={Classes.metricsDisplay}>
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

export default MetricsDisplay;
