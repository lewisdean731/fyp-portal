import { Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import Classes from "./topbar.module.scss";
export default function Topbar(props) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" className={Classes.topbar}>
      <Navbar.Brand href="/dashboard">
        <img className={Classes.logo} src="/logo200.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Brand href="/dashboard" className={Classes.logoText}>
        Monitaur
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/metrics">Metrics</Nav.Link>
          <Nav.Link href="/teams">Teams</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
        <Nav className={"mr"}>
          <NavDropdown
            title={props.userData.user["displayName"]}
            alignRight
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/user">Account Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/dashboard" onClick={props.signOut}>
              Sign Out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
