import { Container } from "react-bootstrap";
import Classes from "./App.module.scss";
import Sidebar from "./components/organisms/ui/sidebar/sidebar";
import Topbar from "./components/organisms/ui/topbar/topbar";

import ROUTES, { RenderRoutes } from "./routes";

function App() {

  return (
    <Container fluid className={Classes.app}>
      <Topbar />
      <Sidebar />
      <Container fluid className={Classes.mainContent}>
        <RenderRoutes routes={ROUTES} />
      </Container>
    </Container>
  );
}

export default App;
