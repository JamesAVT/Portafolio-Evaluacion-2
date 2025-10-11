// src/test/setupTests.js
import matchers from '@testing-library/jasmine-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Este se ejecutará antes de cada test
beforeEach(() => {
    // Agrega los matchers importados al entorno de Jasmine
 jasmine.getEnv().addMatchers(matchers.default.default);
});
