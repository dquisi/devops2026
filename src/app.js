import { fetchUserData } from './api.js';
import { validateUserData } from './validator.js';

document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('load-btn');
    const errorContainer = document.getElementById('error-container');
    const dataContainer = document.getElementById('data-container');

    const userName = document.getElementById('user-name');
    const userEmail = document.getElementById('user-email');
    const userCity = document.getElementById('user-city');

    function showError(message) {
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
        dataContainer.style.display = 'none';
    }

    function showData(data) {
        userName.textContent = data.name;
        userEmail.textContent = data.email;
        userCity.textContent = data.address.city;
        
        errorContainer.style.display = 'none';
        dataContainer.style.display = 'block';
    }

    loadBtn.addEventListener('click', async () => {
        try {
            // Reiniciar estado
            errorContainer.style.display = 'none';
            dataContainer.style.display = 'none';
            loadBtn.disabled = true;
            loadBtn.textContent = 'Cargando...';

            // Cargar datos
            const data = await fetchUserData();
            
            // Validar datos
            validateUserData(data);

            // Mostrar datos
            showData(data);
        } catch (error) {
            // Mostrar error
            showError(error.message);
        } finally {
            // Restaurar botón
            loadBtn.disabled = false;
            loadBtn.textContent = 'Cargar Datos';
        }
    });
});
