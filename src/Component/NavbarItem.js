import { Navbar, Container, Nav } from "react-bootstrap"
function NavbarItem() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Book</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Already read it</Nav.Link>
            <Nav.Link href="#pricing">my recommendations</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
