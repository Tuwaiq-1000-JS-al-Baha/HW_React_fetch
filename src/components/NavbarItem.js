import { Navbar, Container } from "react-bootstrap"

function NavbarItem() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Users</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarItem
