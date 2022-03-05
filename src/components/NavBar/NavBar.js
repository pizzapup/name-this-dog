import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
function NavBar() {
  return (
    <Navbar className="navbar-bg" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">name this dog</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#gallery">gallery</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="userName" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">sign out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">userName</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
