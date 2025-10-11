import React from 'react';
import { Container } from 'react-bootstrap';
import foto from '../assets/img/logoPortafolio.webp';
import Text from '../components/atoms/Text.jsx';
import Button from '../components/atoms/Button.jsx';
import '../styles/pages/Home.css';

/* 
  Esta página representa la pantalla principal del portafolio, que contiene:
  - Logo principal en un contenedor circular.
  - Mi nombre
  - Información mia breve
  - Botón que dirige a mi perfil de GitHub.
*/

function Home() {
 return (
   <Container className="home-container">
    <div className="logo-circle">
      <img src={foto} alt="Logo" />
    </div>
    <Text variant="h2" className='nombre-autor'>James Videla</Text>
    <Text variant="h5" className='informacion-autor'>Estudiante Analista Programador DuocUC</Text>
    <Button 
    variant="primary" 
    className='github-button'
    href="https://github.com/JamesAVT"
    target="_blank" // Abre una nueva pestaña 
    rel="noreferrer" // Para seguridad y privacidad, evitando que la página de destino pueda acceder a la página original
    >
      GitHub
    </Button>
   </Container>
 );
}

export default Home;
