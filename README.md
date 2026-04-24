# Agente IA Web Page

Proyecto web mínimo y funcional desarrollado en JavaScript Vanilla. El proyecto carga datos de un usuario desde una API pública (`https://jsonplaceholder.typicode.com/users/1`) y los muestra en pantalla, con validación de datos y manejo de errores.

## Despliegue en GitHub Pages

Este proyecto está diseñado para ser compatible de forma nativa con **GitHub Pages** sin requerir pasos de construcción (build) adicionales.

### Pasos para desplegar:
1. Crea un repositorio en GitHub y sube todos estos archivos.
2. Ve a los **Settings** (Configuración) de tu repositorio.
3. Navega a la sección **Pages** en la barra lateral izquierda.
4. En **Source** (Fuente), selecciona la rama `main` o `master` y la carpeta `/(root)`.
5. Guarda los cambios.
6. En un par de minutos, tu aplicación estará disponible en la URL que GitHub te proporcione (ej. `https://<usuario>.github.io/<repo>/`).

## Lanzar de forma local

Puedes abrir el archivo `index.html` directamente en tu navegador, o usar un servidor HTTP local.
Dado que la aplicación usa **ES Modules** (`type="module"` en el HTML), abrir directamente con `file://` podría generar problemas de CORS en algunos navegadores.

Se recomienda usar un servidor estático ligero:

```bash
# Si tienes Node.js instalado, puedes usar npx:
npx serve .

# O con Python 3:
python3 -m http.server
```

## Pruebas (Tests)

Para ejecutar las pruebas unitarias:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Corre las pruebas con Jest:
   ```bash
   npm run test
   ```
   O para ejecución en un entorno de integración continua (CI):
   ```bash
   npm run test:ci
   ```
