import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import UserDetailsForm from "../../../../molecules/ui/user/userDetailsForm/userDetailsForm";
import UserPasswordForm from "../../../../molecules/ui/user/userPasswordForm/userPasswordForm";

import Classes from "./userDetails.module.scss";

function UserDetails(props) {
  return (
    <Container fluid className={Classes.userDetails}>
      <TextMedium colour={"grey"}>Personal Details</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <UserDetailsForm userData={props.userData} />
          <hr />
          <UserPasswordForm userData={props.userData} />
        </Col>
      </Row>
    </Container>
  );
}

export default UserDetails;
