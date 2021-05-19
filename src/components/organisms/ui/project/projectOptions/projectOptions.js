import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import DeleteProjectForm from "../../../../molecules/ui/project/deleteProjectForm/deleteProjectForm";

import Classes from "./projectOptions.module.scss";

function ProjectOptions(props) {
  return (
    <Container fluid className={Classes.projectOptions}>
      <TextMedium colour={"grey"}>Options</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <DeleteProjectForm />
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectOptions;
