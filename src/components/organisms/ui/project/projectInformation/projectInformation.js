import { Row, Col, Container } from "react-bootstrap";
import TextMedium from "../../../../atoms/text/medium/textMedium";
import ProjectDetailsForm from "../../../../molecules/ui/project/projectDetailsForm/projectDetailsForm";
import ProjectDetailsDisplay from "../../../../molecules/ui/project/projectDetailsDisplay/projectDetailsDisplay";
import Classes from "./projectInformation.module.scss";

function ProjectInformation(props) {
  return (
    <Container fluid className={Classes.projectInformation}>
      <TextMedium colour={"grey"}>Project Information</TextMedium>
      <Row className="justify-content-md-center">
        <Col>
          <ProjectDetailsDisplay projectData={props.projectData} />
          <hr />
          <ProjectDetailsForm projectData={props.projectData} token={props.token} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectInformation;
