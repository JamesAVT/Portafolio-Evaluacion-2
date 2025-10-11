import React from "react";

/*
    Es un componente para mostrar imágenes.
    Como props, tiene:
    src: que vendria siendo la URL de la imagen que se mostrará
    alt: que es el texto alternativo de la imagen
    className: que es la clase CSS para personalizar el estilo
*/
function Image({ src, alt, className }) {
 return <img src={src} alt={alt} className={className} />;
}

export default Image;
