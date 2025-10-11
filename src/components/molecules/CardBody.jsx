import React from 'react';
import Text from '../atoms/Text';

/* 
  Este componente representa el contenido principal de la tarjeta.
  Se usa el átomo Text para mostrar título, descripción, link y tecnologías.
  
  Como props contiene:
  - title: que es el título del proyecto o de la noticia.
  - description: es la descripción del proyecto o la noticia.
  - link: URL del enlace.
  - tecnologias: son las tecnologías que se utilizaron para realizar el proyecto y las tecnologías que se muestran en la noticia

*/

function CardBody({ title, description, link, tecnologias }) {
  return (
    <>
    <Text variant="h5">{title}</Text>
    <Text variant="p">{description}</Text>
    <Text variant="p">{link}</Text>
    <Text variant="p">{tecnologias}</Text>
    </>
  );
}

export default CardBody;
