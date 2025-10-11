import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProyectoDetalle from "../../pages/ProyectoDetalle";
import proyectos from "../../data/proyectos";

describe("Componente ProyectoDetalle", () => {
    it("debe renderizar el primer proyecto", () => {
        // Toma el primer proyecto del array de proyectos para probar
        const proyecto = proyectos[0];

        render(
            // MemoryRouter se usa para simular el enrutamiento en los tests
            <MemoryRouter initialEntries={[`/proyectos/${proyecto.id}`]}>
                <Routes>
                    <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
                </Routes>
            </MemoryRouter>
        );

        // Verifica que el nombre del proyecto se renderiza
        expect(screen.getByText(proyecto.name)).toBeTruthy();

        // Verifica que la descripción se renderiza
        expect(screen.getByText(proyecto.description)).toBeTruthy();

        // Verifica que el link se muestre
        expect(screen.getByText(proyecto.link)).toBeTruthy();

        // Verifica que las tecnologías se muestren
        expect(screen.getByText(proyecto.tecnologias)).toBeTruthy();

        // Verifica que la imagen se cargue con el src correcto
        const imagen = screen.getByAltText(proyecto.name); // Busca la imagen por su atributo alt
        expect(imagen.src.endsWith('6da18a021870ddc0262347a3d0394808.jpg')).toBe(true); // Asegura que el src sea el esperado
    });
})