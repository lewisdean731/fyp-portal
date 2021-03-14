import Dashboard from "./layouts/dashboard/dashboard";
import { Container } from "react-bootstrap";
import Classes from "./App.module.scss";
function App() {
  return (
    <Container fluid className={Classes.App}>
      <Dashboard />
    </Container>
  );
}

export default App;
