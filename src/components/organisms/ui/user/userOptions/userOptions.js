import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";

import Classes from "./userOptions.module.scss";

function UserOptions(props) {
  return (
    <Container fluid className={Classes.userOptions}>
      <TextMedium colour={"grey"}>Options</TextMedium>
      <Row className="justify-content-md-center">
        <Col>{/* <UserOptionsForm projectData={props.projectData} /> */}</Col>
      </Row>
    </Container>
  );
}

export default UserOptions;
