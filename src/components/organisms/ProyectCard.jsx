import React from 'react';
import { Card } from 'react-bootstrap';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import CardBody from '../molecules/CardBody';
import { useNavigate } from 'react-router-dom';

function ProyectCard({ proyecto }) {
 const navigate = useNavigate();

 return (
   <Card data-testid="proyect-card" style={{ width: '18rem' }} className="custom-card">
     <Image src={proyecto.image} alt={proyecto.name} className="card-img-top" />
     <Card.Body>
       <CardBody
         title={proyecto.name}
         description={proyecto.description}
         link={proyecto.link}
         tecnologias={proyecto.tecnologias}
       />
       <Button variant="primary" onClick={() => navigate(`/proyectos/${proyecto.id}`)}>
        Ver detalles
       </Button>
     </Card.Body>
   </Card>
 );
}

export default ProyectCard;
