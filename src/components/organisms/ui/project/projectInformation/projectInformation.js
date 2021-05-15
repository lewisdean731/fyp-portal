import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";

import Classes from "./projectInformation.module.scss";

function ProjectInformation(props) {
  return (
    <Container fluid className={Classes.userDetails}>
      <TextMedium colour={"grey"}>Project Information</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          {/* <ProjectDetailsDisplay projectData={props.projectData} /> */}
          <hr />
          {/* <ProjectDetailsForm projectData={props.projectData} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectInformation;
