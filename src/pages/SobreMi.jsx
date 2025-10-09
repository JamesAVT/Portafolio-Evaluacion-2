import React from "react";
import { Container } from "react-bootstrap";
import "../styles/pages/SobreMi.css"
import Text from '../components/atoms/Text.jsx';

function SobreMi() {
    return (
        <Container className="sobre-mi-container">
            <div className="sobre-mi-box" data-testid="sobre-mi-box"> {/*data-testid se usa para identificar este elemento en los test, sin depender de clases o textos que puedan cambiar*/}
                <Text variant="h1">Sobre mi</Text>
                <Text variant="p" className="texto-sobre-mi">
                    Hola! Soy James Videla, estudiante de Analista Programador en 
                    DuocUC. Me apasiona la tecnología, el desarrollo web y aprender nuevas
                    herramientas que me permitan mejorar como profesional! :) 
                </Text>
                <Text variant="p" className="texto-sobre-mi">
                    Disfruto crear proyectos que combinen diseño y funcionalidad, de esta manera
                    puedo seguir creciendo en el mundo del desarrollo!
                </Text>
            </div>
        </Container>
    )
}

export default SobreMi;