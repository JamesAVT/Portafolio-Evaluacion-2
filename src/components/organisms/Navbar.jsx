import { Navbar, Nav, Container } from 'react-bootstrap';

/* 
  Este componente representa la barra de navegación principal de la página.
  Con (bg="dark") hacemos que la barra sea de color oscuro y con (variant="dark") texto claro.
  Con (expand="lg") hace que se adapte a pantallas grandes y pequeñas.

  Contiene enlaces internos a las páginas principales:
  - Proyectos
  - Sobre mí
  - Noticias

*/

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/proyectos">Proyectos</Nav.Link>
            <Nav.Link href="/sobre-mi">Sobre mi</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;