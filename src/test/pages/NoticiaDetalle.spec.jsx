import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NoticiaDetalle from "../../pages/NoticiaDetalle";
import noticias from "../../data/noticias";

describe("Componente NoticiaDetalle", () => {
    it("debe renderizar la primera noticia", () => {
        // Toma la primera noticia del array de noticias para probar
        const noticia = noticias[0];

        render(
            // MemoryRouter se usa para simular el enrutamiento en los tests
            <MemoryRouter initialEntries={[`/noticias/${noticia.id}`]}>
                <Routes>
                    <Route path="/noticias/:id" element={<NoticiaDetalle />} />
                </Routes>
            </MemoryRouter>
        );

        // Verifica que el nombre de la noticia se renderiza
        expect(screen.getByText(noticia.name)).toBeTruthy();

        // Verifica que la descripción se renderiza
        expect(screen.getByText(noticia.description)).toBeTruthy();

        // Verifica que el link se muestre
        expect(screen.getByText(noticia.link)).toBeTruthy();

        // Verifica que las tecnologías se muestren
        expect(screen.getByText(noticia.tecnologias)).toBeTruthy();

        // Verifica que la imagen se cargue con el src correcto
        const imagen = screen.getByAltText(noticia.name);
        expect(imagen.src).toContain(noticia.image);
    });
})