import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function NoticiaCard({ noticia }) {
 const navigate = useNavigate();

 return (
   <Card data-testid="proyect-card" style={{ width: '18rem' }} className="custom-card">
     <Image src={noticia.image} alt={noticia.name} className="card-img-top" />
     <Card.Body>
       <CardBody
         title={noticia.name}
         description={noticia.description}
         link={noticia.link}
         tecnologias={noticia.tecnologias}
       />
       <Button variant="primary" onClick={() => navigate(`/noticias/${noticia.id}`)}>
        Ver detalles
       </Button>
     </Card.Body>
   </Card>
 );
}

export default NoticiaCard;