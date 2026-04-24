# Requerimientos Funcionales y No Funcionales

## Requerimientos Funcionales
- **RF1**: La aplicación debe constar de una página web con un archivo `index.html` y un controlador `app.js`.
- **RF2**: Debe existir un botón con la funcionalidad de cargar datos de un usuario.
- **RF3**: Al presionar el botón, se deben cargar los datos del API: `https://jsonplaceholder.typicode.com/users/1`.
- **RF4**: La interfaz debe mostrar el `nombre`, `email` y la `ciudad` (city) del usuario cargado.
- **RF5**: Se debe validar la integridad de los datos antes de mostrarlos en pantalla (ej. campos vacíos, formato correcto de email, que los campos existan).
- **RF6**: En caso de que los datos no sean válidos, la interfaz debe mostrar un mensaje de error legible.
- **RF7**: Si existe un problema de red (servidor caído o sin internet), se debe notificar al usuario con un mensaje de error.
- **RF8**: La lógica de negocio y peticiones deben estar separadas en los módulos `api.js` y `validator.js`.

## Requerimientos No Funcionales
- **RNF1 (Tecnología)**: Se debe usar puramente HTML, JavaScript Vanilla (ES6 Modules).
- **RNF2 (Simplicidad)**: No se deben usar frameworks ni librerías de interfaz de usuario ni estilos innecesarios (CSS extra o Tailwind/Bootstrap).
- **RNF3 (Calidad)**: El sistema debe contar con pruebas unitarias usando el test runner `Jest`. Las pruebas deben abarcar todos los casos borde del validador y los errores de API.
- **RNF4 (Compatibilidad)**: El código entregado debe ser altamente compatible para poder ser alojado sin un proceso de build directamente en un servidor estático como **GitHub Pages**.
