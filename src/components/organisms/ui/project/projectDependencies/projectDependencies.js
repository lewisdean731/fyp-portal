import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";

import Classes from "./projectDependencies.module.scss";

function ProjectDependencies(props) {
  return (
    <Container fluid className={Classes.projectDependencies}>
      <TextMedium colour={"grey"}>Dependencies</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          {/* <ProjectDependenciesDisplay projectData={props.projectData} /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectDependencies;
