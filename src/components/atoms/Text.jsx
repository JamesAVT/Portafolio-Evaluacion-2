import React from "react";
/* 
    Este es un componente texto
    Contiene props como:
    children: que es el contenido que se mostrará dentro del texto (como texto, números, etc)
    variant: que define el tipo de etiqueta HTML que se renderiza (por ejemplo 'p', 'h1', 'h2', etc)
    className: clase css opcional para aplicar estilos
*/
function Text({ children, variant = 'p', className }) {
 const Tag = variant; 
 return <Tag className={className}>{children}</Tag>;
}

export default Text;
