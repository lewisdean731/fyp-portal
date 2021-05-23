import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { getMetrics } from "../../../../../utils/apiUtil";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import DashboardItem from "../../../../molecules/ui/dashboard/dashboardItem/dashboardItem";

import Classes from "./dashboardSummary.module.scss";

function DashboardSummary(props) {

  return (
    <Container className={Classes.dashboardSummary}>
      <TextMedium colour={"grey"}>At a Glance</TextMedium>
      <Row className="justify-content-md-center">
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"grey"}
            colour2={"black"}
            text1={props.metrics.totalProjects}
            text2={"Total Projects"}
          />
        </Col>
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"green"}
            colour2={"black"}
            text1={props.metrics.greenProjects}
            text2={"Green Projects"}
          />
        </Col>
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"yellow"}
            colour2={"black"}
            text1={props.metrics.yellowProjects}
            text2={"Yellow Projects"}
          />
        </Col>
        <Col className={Classes.col}>
          <DashboardItem
            colour1={"red"}
            colour2={"black"}
            text1={props.metrics.redProjects}
            text2={"Red Projects"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardSummary;
