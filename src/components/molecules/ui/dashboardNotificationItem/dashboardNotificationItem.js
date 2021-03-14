import React from "react";
import TextSmall from "../../../atoms/text/small/textSmall";
import { Row, Col } from "react-bootstrap";
import Classes from "./dashboardNotificationItem.module.scss";

function dashboardNotificationItem(props) {
  return (
    <Row className={"justify-content-md-center"}>
      <Col md={8} className={Classes.dashboardNotificationItem}>
        <a href={props.link} classname={Classes.anchor}>
        <TextSmall colour={"grey"}>
          <img src="https://via.placeholder.com/48.png" />
          &emsp;{props.textDetails}
        </TextSmall>
        </a>
      </Col>
    </Row>
  );
}

export default dashboardNotificationItem;
