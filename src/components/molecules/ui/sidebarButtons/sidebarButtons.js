import {Row, Col} from "react-bootstrap";
import SidebarButton from "../../../atoms/ui/sidebar/sidebarButton/sidebarButton";
export default function SidebarButtons(){
  return(
    <div>
      <Row>
        <Col>
          <SidebarButton link={"fake.link"}>Fake Link</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"fake.link"}>Fake Link</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"fake.link"}>Fake Link</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"fake.link"}>Fake Link</SidebarButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <SidebarButton link={"fake.link"}>Fake Link</SidebarButton>
        </Col>
      </Row>
    </div>
  )
}