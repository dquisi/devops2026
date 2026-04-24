# Manual Técnico de los Módulos

## `src/api.js`
Este módulo expone funciones encargadas de comunicarse con los servicios backend.

### `fetchUserData(): Promise<Object>`
- **Descripción:** Ejecuta una petición GET hacia la API `jsonplaceholder` para traer los datos del usuario con id 1.
- **Retorno:** Devuelve una promesa con el JSON parseado.
- **Manejo de Errores:** Valida el status `ok` del response. Si no es un status `2xx`, lanza un error "Error de red al conectar con el backend.". Adicionalmente captura errores a nivel de red (por ejemplo fallos de DNS o falta de internet) y lanza "Error de conexión o red inaccesible.".

---

## `src/validator.js`
Este módulo aísla toda la lógica de validación e integridad de los datos recibidos.

### `validateUserData(data: Object): Boolean`
- **Descripción:** Valida la estructura y contenido del objeto devuelto por la API.
- **Argumentos:** `data` - El objeto json recibido del API.
- **Retorno:** Devuelve `true` si todas las validaciones son exitosas.
- **Excepciones lanzadas:** 
  - Si falta el objeto: lanza `"Datos incompletos o vacíos."`.
  - Si el nombre está vacío o es nulo: lanza `"El nombre no puede estar vacío."`.
  - Si el email no cumple el formato `x@y.z`: lanza `"Email inválido."`.
  - Si no existe un objeto `address` o el campo `city` es vacío: lanza `"La ciudad no puede estar vacía o es incompleta."`.

---

## `src/app.js`
Este es el punto de entrada de Javascript ejecutado en el cliente (Browser). No expone métodos, actúa conectando el DOM con `api.js` y `validator.js`.

**Características internas:**
- Espera a que el evento `DOMContentLoaded` se dispare antes de intentar acceder a los elementos HTML.
- Utiliza async/await para manejar la petición expuesta por `api.js`.
- Controla el estado visual del botón (deshabilitándolo durante la carga) para evitar peticiones concurrentes dobles.
- Re-dirige de manera segura los errores lanzados hacia la interfaz, haciéndolos visibles en el bloque `#error-container`.
