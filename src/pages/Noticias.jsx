import React from "react";
import { Container, Row } from 'react-bootstrap';
import Text from '../components/atoms/Text.jsx';
import '../styles/pages/Noticias.css';
import noticias from '../data/noticias';
import NoticiaCard from "../components/organisms/NoticiaCard.jsx";

/* 
  Esta página muestra las noticias en forma de tarjetas.

  Utilizamos 'key={noticia.id}' para optimizar el renderizado en React.
  También, cada tarjeta incluye un botón de "Ver detalles" que lleva a la página de NoticiaDetalle correspondiente.

  Aquí igual reutilizamos el átomo de Text para el título de la página y tambien el CSS de Noticias.css para personalizar el estilo de la página.

*/

function Noticias() {

  return(
    <Container className="my-5">
      <Text variant="h1" className="titulo-noticias">Noticias</Text>
      {/*Contenedor de tarjeta de noticias*/}
      <Row className="noticias-row">
        {noticias.map((noticia) => (
          <NoticiaCard key={noticia.id} noticia={noticia} />
          ))}
      </Row>
    </Container>
    );

}

export default Noticias;