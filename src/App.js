import { Container, Row, Col } from "react-bootstrap";
import Classes from "./App.module.scss";
import Sidebar from "./components/organisms/ui/sidebar/sidebar";
import Topbar from "./components/organisms/ui/topbar/topbar";

import ROUTES, { RenderRoutes } from "./routes";

function App() {
  return (
    <Container fluid className={Classes.app}>
      <Row>
        <Col className={Classes.topbar}>
          <Topbar />
        </Col>
      </Row>
      <Row>
        <Col className={Classes.sidebar}>
          <Sidebar />
        </Col>
        <Col>
          <RenderRoutes routes={ROUTES} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
