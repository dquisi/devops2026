export function validateUserData(data) {
    if (!data) {
        throw new Error('Datos incompletos o vacíos.');
    }

    const { name, email, address } = data;

    if (!name || name.trim() === '') {
        throw new Error('El nombre no puede estar vacío.');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Email inválido.');
    }

    if (!address || !address.city || address.city.trim() === '') {
        throw new Error('La ciudad no puede estar vacía o es incompleta.');
    }

    return true;
}
