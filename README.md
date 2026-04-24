# Agente IA Web Page

Proyecto web mínimo y funcional desarrollado en JavaScript Vanilla. El proyecto carga datos de un usuario desde una API pública (`https://jsonplaceholder.typicode.com/users/1`) y los muestra en pantalla, con validación de datos y manejo de errores.

## Despliegue CI/CD y GitHub Pages

Este proyecto utiliza **GitHub Actions** para automatizar el ciclo de vida del desarrollo:
- **Ramas `develop` y `main`**: Al hacer push o pull request, se ejecutan las pruebas unitarias y se validan los archivos esenciales del proyecto.
- **Rama `main`**: Adicionalmente, si las pruebas pasan exitosamente, el pipeline despliega automáticamente el sitio web de forma estática en GitHub Pages.

### ¿Qué debes activar en GitHub para que funcione?
Para que el job de `deploy` funcione correctamente y publique tu página:
1. Ve a los **Settings** (Configuración) de tu repositorio en GitHub.
2. Navega a la sección **Pages** en la barra lateral izquierda.
3. Bajo el apartado **Build and deployment** > **Source**, selecciona la opción **"GitHub Actions"**.
4. ¡Listo! Tu próximo merge o push a `main` publicará automáticamente la web en GitHub Pages utilizando el Workflow configurado.

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
