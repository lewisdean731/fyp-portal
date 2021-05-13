import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import Classes from "./topbar.module.scss";
export default function Topbar(props) {
  return (
    <Navbar bg="light" expand="lg" className={Classes.topbar}>
      <Navbar.Brand href="/">
        <img className={Classes.logo} src="../../logo200.png" />
      </Navbar.Brand>
      <Navbar.Brand href="/">Monitaur</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Fake Link</Nav.Link>
          <Nav.Link href="#">Fake Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Nav className={"mr"}>
          <NavDropdown
            title={props.userData.user["displayName"]}
            alignRight
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/user">Account Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Sign Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <div className={Classes.border}></div>
    </Navbar>
  );
}
