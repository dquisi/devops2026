import { fetchUserData } from '../src/api';

describe('Pruebas del Módulo API', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('debe manejar errores de red y conexión con backend (respuesta no ok)', async () => {
        global.fetch.mockResolvedValue({
            ok: false
        });

        await expect(fetchUserData()).rejects.toThrow('Error de red al conectar con el backend.');
    });

    it('debe manejar errores de red puros (fetch lanza excepcion)', async () => {
        global.fetch.mockRejectedValue(new Error('Network error'));

        await expect(fetchUserData()).rejects.toThrow('Error de conexión o red inaccesible.');
    });

    it('debe retornar datos si la respuesta es exitosa', async () => {
        const mockData = { name: 'Test User' };
        global.fetch.mockResolvedValue({
            ok: true,
            json: async () => mockData
        });

        const data = await fetchUserData();
        expect(data).toEqual(mockData);
    });
});
