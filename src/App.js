import { Container, Row, Col } from "react-bootstrap";
import Classes from "./App.module.scss";
import Sidebar from "./components/organisms/ui/sidebar/sidebar";
import Topbar from "./components/organisms/ui/topbar/topbar";

import ROUTES, { RenderRoutes } from "./routes";

function App() {

  return (
    <Container fluid className={Classes.app}>
      <Row>
        <Col>
          <Topbar />
        </Col>
      </Row>
      <Row>
        <Col className={Classes.sidebar}>
          <Sidebar />
        </Col>
        <Col className={Classes.mainContent}>
          <RenderRoutes routes={ROUTES} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
