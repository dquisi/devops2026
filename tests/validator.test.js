import { validateUserData } from '../src/validator';

describe('Pruebas del Validador', () => {
    it('debe aceptar datos válidos', () => {
        const validData = {
            name: 'Juan Perez',
            email: 'juan@example.com',
            address: { city: 'Madrid' }
        };
        expect(validateUserData(validData)).toBe(true);
    });

    it('debe lanzar error si el email es inválido', () => {
        const invalidEmailData = {
            name: 'Juan Perez',
            email: 'juan@example',
            address: { city: 'Madrid' }
        };
        expect(() => validateUserData(invalidEmailData)).toThrow('Email inválido.');
    });

    it('debe lanzar error si el nombre está vacío', () => {
        const emptyNameData = {
            name: '   ',
            email: 'juan@example.com',
            address: { city: 'Madrid' }
        };
        expect(() => validateUserData(emptyNameData)).toThrow('El nombre no puede estar vacío.');
    });

    it('debe lanzar error si la ciudad está vacía', () => {
        const emptyCityData = {
            name: 'Juan Perez',
            email: 'juan@example.com',
            address: { city: '   ' }
        };
        expect(() => validateUserData(emptyCityData)).toThrow('La ciudad no puede estar vacía o es incompleta.');
    });

    it('debe lanzar error si la respuesta del api es incompleta (faltan campos)', () => {
        const incompleteData1 = {
            name: 'Juan Perez'
        };
        expect(() => validateUserData(incompleteData1)).toThrow('Email inválido.');
        
        const incompleteData2 = {
            name: 'Juan',
            email: 'j@j.com'
        };
        expect(() => validateUserData(incompleteData2)).toThrow('La ciudad no puede estar vacía o es incompleta.');

        expect(() => validateUserData(null)).toThrow('Datos incompletos o vacíos.');
    });
});
