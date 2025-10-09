import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import noticias from '../data/noticias.js';
import Image from '../components/atoms/Image.jsx';
import Text from '../components/atoms/Text.jsx';
import '../styles/pages/ProyectoDetalle.css';

function NoticiaDetalle() {
 const { id } = useParams();
 const noticia = noticias.find((p) => p.id === parseInt(id));

 return (
   <Container className="detalle-container">
     <Card className="detalle-card">
       <Image src={noticia.image} alt={noticia.name} className="detalle-img" />
       <Card.Body className="detalle-body">
         <Text variant="h2" className="detalle-titulo">{noticia.name}</Text>
         <Text variant="p" className="detalle-description">{noticia.description}</Text>
         <Text className="link">Link</Text>
         <Text variant="p" className="detalle-link">
          <a href={noticia.link} target="_blank" rel="noopener noreferrer">
            {noticia.link}
          </a>
          </Text>
          <Text className="tecnologia">Tecnologías</Text>
         <Text variant="p" className="detalle-tecnologia">{noticia.tecnologias}</Text>
       </Card.Body>
     </Card>
   </Container>
 );
}

export default NoticiaDetalle;