import React from 'react';
import { render, screen } from '@testing-library/react';
import SobreMi from '../../pages/SobreMi';

// Grupo de tests para el componente SobreMi
describe('Componente SobreMi', () => {

    // Test 1: Verifica que el título se renderice
    it('debería mostrar el título "Sobre mi"', () => {
        render(<SobreMi />); // Renderizamos el componente
        // Buscamos el texto "Sobre mi" (ignorando mayúsculas/minúsculas con /i)
        const titulo = screen.getByText(/Sobre mi/i);
        expect(titulo).toBeTruthy(); // Verifica que el elemento exista
    });

    // Test 2: Verificar que los textos de la descripción se muestren
    it('debería mostrar breve descripción', () => {
        render(<SobreMi />);
        // Buscamos los textos principales del componente
        const texto1 = screen.getByText(/Hola! Soy James Videla/i);
        const texto2 = screen.getByText(/Disfruto crear proyectos/i);
        expect(texto1).toBeTruthy(); // Verifica que el primer párrafo exista
        expect(texto2).toBeTruthy(); // Verifica que el segundo párrafo exista
    });

    // Test 3: Verificar que la caja principal se renderice correctamente
    it('debería renderizar la caja correctamente', () => {
        render(<SobreMi />);
        // Aquí usamos getByTestId en vez de getByClassName porque
        // Testing Library no provee un selector directo por clase.
        // data-testid nos permite identificar el elemento
        const caja = screen.getByTestId('sobre-mi-box');
        expect(caja).toBeTruthy(); // Verifica que la caja exista.
    });
})