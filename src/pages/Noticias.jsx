import React from "react";
import { Container, Row } from 'react-bootstrap';
import Text from '../components/atoms/Text.jsx';
import '../styles/pages/Noticias.css';
import noticias from '../data/noticias';
import NoticiaCard from "../components/organisms/NoticiaCard.jsx";


function Noticias() {
    return(
       <Container className="my-5">
        <Text variant="h1" className="titulo-noticias">Noticias</Text>
         <Row className="noticias-row">
           {noticias.map((noticia) => (
             <NoticiaCard key={noticia.id} noticia={noticia} />
           ))}
         </Row>
    
       </Container>
     );

}

export default Noticias;