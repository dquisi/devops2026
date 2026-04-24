# Arquitectura del Sistema

La aplicación sigue un patrón de **Módulos ES6** (ECMAScript Modules) con una separación clara de responsabilidades en el Frontend. No se utilizan frameworks (como React o Angular) ni librerías adicionales para mantener la compatibilidad máxima y la ligereza de la aplicación.

## Estructura de Directorios

```text
/
├── index.html           # Punto de entrada. Estructura de la vista.
├── src/
│   ├── app.js           # Orquestador principal (Controlador) y manipulador del DOM.
│   ├── api.js           # Capa de acceso a datos (Llamadas de red).
│   └── validator.js     # Capa de negocio (Reglas de validación).
├── tests/               # Pruebas unitarias de las diferentes capas.
│   ├── api.test.js
│   └── validator.test.js
├── docs/                # Documentación del proyecto.
├── package.json         # Configuración y dependencias (solo para desarrollo/testing).
└── babel.config.js      # Soporte de módulos modernos para el test runner (Jest).
```

## Flujo de Datos
1. El usuario interactúa con la vista (`index.html`) mediante el botón.
2. El evento es capturado por `app.js`.
3. `app.js` solicita los datos a `api.js`.
4. `api.js` ejecuta la petición asíncrona (Fetch) hacia la API externa y devuelve los datos o lanza un error.
5. `app.js` recibe los datos y los envía a `validator.js`.
6. `validator.js` comprueba que la estructura, el nombre, la ciudad y el email sean válidos. Si algo falla, lanza un error.
7. `app.js` intercepta todo mediante un bloque `try-catch`. Si todo fue un éxito, se renderizan los datos en el DOM. En caso de error de red o validación, se actualiza el DOM para mostrar el mensaje de error.
