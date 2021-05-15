import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";

import Classes from "./projectOptions.module.scss";

function ProjectOptions(props) {
  return (
    <Container fluid className={Classes.projectOptions}>
      <TextMedium colour={"grey"}>Options</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          {/* <ProjectOptionsForm projectData={props.projectData} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectOptions;
