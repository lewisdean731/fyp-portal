import Dashboard from "./layouts/dashboard/dashboard";
import { Container } from "react-bootstrap";
import Classes from "./App.module.scss";
import Sidebar from "./components/organisms/ui/sidebar/sidebar";
import Topbar from "./components/organisms/ui/topbar/topbar";
function App() {
  return (
    <Container fluid className={Classes.app}>
      <Topbar />
      <Sidebar />
      <Container fluid noGutters className={Classes.mainContent}>
        <Dashboard />
      </Container>
    </Container>
  );
}

export default App;
