import React from "react";
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

// Describimos el bloque de pruebas para el componente Home
describe('Componente Home', () => {
    // Primera prueba: Verifica que el título se renderiza correctamente
    it('debería renderizar el título correctamente', () => {
        render(<Home />); // Renderizamos el componente Home
        const titulo = screen.getByText('James Videla'); // Buscamos el elemento con el texto "James Videla"
        expect(titulo).toBeTruthy(); // Verifica que el elemento esté en el DOM
    });

    // Segunda prueba: Verifica que el logo se muestre correctamente
    it('debería renderizar el logo correctamente', () => {
        render(<Home />); // Renderiza el componente Home
        const logo = screen.getByAltText("Logo"); // Busca la imagen por el atributo "alt"
        expect(logo).toBeTruthy(); // Verifica que el elemento exista
    })

    // Tercera prueba: Verifica que la descripción se muestre
    it('debería mostrar breve descripción', () => {
        render(<Home />); // Renderiza el componente Home
        const descripcion = screen.getByText("Estudiante Analista Programador DuocUC"); // Busca el texto de la descripción
        expect(descripcion).toBeTruthy(); // Verifica que la descripción esté
    })

    // Cuarta prueba: Verifica que el botón de GitHub se muestre
    it('debería mostrar el botón de Github', () => {
        render(<Home />); // Renderiza el componente Home
        const boton = screen.getByText('GitHub'); // Busca el botón por su texto
        expect(boton).toBeTruthy(); // Verifica que el botón exista en el DOM
    })
})