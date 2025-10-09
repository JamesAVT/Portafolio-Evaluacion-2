import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import proyectos from '../data/proyectos.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import '../styles/pages/ProyectoDetalle.css';

function ProyectoDetalle() {
 const { id } = useParams();
 const proyecto = proyectos.find((p) => p.id === parseInt(id));

 return (
   <Container className="detalle-container">
     <Card className="detalle-card">
       <Image src={proyecto.image} alt={proyecto.name} className="detalle-img" />
       <Card.Body className="detalle-body">
         <Text variant="h2" className="detalle-titulo">{proyecto.name}</Text>
         <Text variant="p" className="detalle-description">{proyecto.description}</Text>
         <Text className="link">Link</Text>
         <Text variant="p" className="detalle-link">
          <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
            {proyecto.link}
          </a>
          </Text>
          <Text className="tecnologia">Tecnologías utilizadas</Text>
         <Text variant="p" className="detalle-tecnologia">{proyecto.tecnologias}</Text>
       </Card.Body>
     </Card>
   </Container>
 );
}

export default ProyectoDetalle;
