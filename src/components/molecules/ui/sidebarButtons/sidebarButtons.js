import { Row, Col } from "react-bootstrap";
import SidebarButton from "../../../atoms/ui/sidebar/sidebarButton/sidebarButton";
export default function SidebarButtons() {
  return (
    <div>
      <Row>
        <Col>
          <SidebarButton link={"/dashboard"}>Dashboard</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"fake.link"}>Fake Link</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"/projects"}>My Projects</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"/teams"}>My Teams</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"/user"}>Account Settings</SidebarButton>
        </Col>
      </Row>
    </div>
  );
}
