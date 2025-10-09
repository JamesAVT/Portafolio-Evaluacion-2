import React from 'react';
import { Container, Row } from 'react-bootstrap';
import proyectos from '../data/proyectos';
import ProyectCard from '../components/organisms/ProyectCard';
import '../styles/pages/Proyectos.css';
import Text from '../components/atoms/Text.jsx';

function Proyectos() {
 return (
   <Container className="my-5">
    <Text variant="h1" className="titulo-proyectos">Proyectos</Text>
     <Row className="proyectos-row">
       {proyectos.map((proyecto) => (
         <ProyectCard key={proyecto.id} proyecto={proyecto} />
       ))}
     </Row>

   </Container>
 );
}

export default Proyectos;
