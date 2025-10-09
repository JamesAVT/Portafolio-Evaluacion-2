import { Navbar, Nav, Container } from 'react-bootstrap';

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
