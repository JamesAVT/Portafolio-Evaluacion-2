import React from "react";
import { render, screen } from "@testing-library/react";
import Noticias from "../../pages/Noticias";
import noticias from "../../data/noticias";
import { MemoryRouter } from "react-router-dom";

// Iniciamos el bloque de pruebas para el componente "Noticias"
describe("Componente Noticias", () => {
    
    // Verifica que se renderiza correctamente el título y las tarjetas
    it("debe renderizar el título y todas las tarjetas de noticias", () => {
        // Renderizamos el componente Noticias
        render(
            <MemoryRouter>
                <Noticias />
            </MemoryRouter>
        );
        
        // Buscamos el texto "Noticias" en pantalla (el título principal)
        const titulo = screen.getByText("Noticias");
        // Comprobamos que el título se haya renderizado
        expect(titulo).not.toBeNull();

        // Buscamos que todos los elementos correspondan a las tarjetas
        const tarjetas = screen.getAllByTestId("proyect-card");
        // Verifica que se hayan renderizado las tarjetas y las noticias
        expect(tarjetas.length).toBe(noticias.length);
    });
});
