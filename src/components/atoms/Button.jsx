import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

/* 
    children: es el contenido que se muestra dnetro del boton (texto, iconos, etc)
    props: es cualquier prop que se utilice como variant(color del boton),
    onClick (funcion que se ejecuta al hacer click) y className(clases css)
*/

function Button({ children, ...props }) {
 return <BootstrapButton {...props}>{children}</BootstrapButton>;
}

export default Button;
