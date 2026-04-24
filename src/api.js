export async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Error de red al conectar con el backend.');
        }
        return await response.json();
    } catch (error) {
        if (error.message === 'Error de red al conectar con el backend.') {
            throw error;
        }
        throw new Error('Error de conexión o red inaccesible.');
    }
}
