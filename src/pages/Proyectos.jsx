import React from 'react';
import { Container, Row } from 'react-bootstrap';
import proyectos from '../data/proyectos';
import ProyectCard from '../components/organisms/ProyectCard';
import '../styles/pages/Proyectos.css';
import Text from '../components/atoms/Text.jsx';

/* 
  Esta página muestra los proyectos en forma de cards (tarjetas)

  Recorre el arreglo 'proyectos' y renderiza cada proyecto como una tarjeta.
  Aquí utilizamos 'key={proyecto.id}' para optimizar el renderizado en React y
  cada tarjeta incluye un botón "Ver detalles" que lleva a la página ProyectoDetalle correspondiente

  También, utilizamos 'Container' y 'Row' de React Bootstrap para maquetar el contenido de forma responsiva,
  reutiliamos el átomo 'Text' para el título de la página y el CSS importado, permtiendo personalizar el estilo de la página.


*/

function Proyectos() {
  return (
    <Container className="my-5">
      <Text variant="h1" className="titulo-proyectos">Proyectos</Text>
      {/* Contenedor de tarjetas de proyectos */}
      <Row className="proyectos-row">
        {proyectos.map((proyecto) => (
          <ProyectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </Row>
    </Container>
  );
}

export default Proyectos;
