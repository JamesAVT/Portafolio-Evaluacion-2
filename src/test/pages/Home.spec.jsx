import React from "react";
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Componente Home', () => {
    it('debería renderizar el título correctamente', () => {
        render(<Home />);
        const titulo = screen.getByText('James Videla');
        expect(titulo).toBeTruthy(); // Verifica que el texto esté en el DOM
    });

    it('debería renderizar el logo correctamente', () => {
        render(<Home />);
        const logo = screen.getByAltText("Logo");
        expect(logo).toBeTruthy(); // Verifica que el elemento exista
    })

    it('debería mostrar breve descripción', () => {
        render(<Home />);
        const descripcion = screen.getByText("Estudiante Analista Programador DuocUC");
        expect(descripcion).toBeTruthy();
    })

    it('debería mostrar el botón de Github', () => {
        render(<Home />);
        const boton = screen.getByText('GitHub');
        expect(boton).toBeTruthy();
    })
})