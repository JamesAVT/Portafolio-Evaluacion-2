import React from "react";
import { render, screen } from "@testing-library/react";
import Proyectos from "../../pages/Proyectos";
import proyectos from "../../data/proyectos";
import { MemoryRouter } from "react-router-dom";

// Iniciamos el bloque de pruebas para el componente "Proyectos"
describe("Componente Proyectos", () => {
    
    // Verifica que se renderiza correctamente el título y las tarjetas
    it("debe renderizar el título y todas las tarjetas de proyectos", () => {
        // Renderizamos el componente Proyectos
        // El MemoryRouter permite simular rutas de React Router en los test
        render(
            <MemoryRouter>
                <Proyectos />
            </MemoryRouter>
        );
        
        // Buscamos el texto "Proyectos" en pantalla (el título principal)
        const titulo = screen.getByText("Proyectos");
        // Comprobamos que el título se haya renderizado
        expect(titulo).not.toBeNull();

        // Buscamos que todos los elementos correspondan a las tarjetas
        const tarjetas = screen.getAllByTestId("proyect-card");
        // Verifica que se hayan renderizado las tarjetas y los proyectos
        expect(tarjetas.length).toBe(proyectos.length);
    });
});
