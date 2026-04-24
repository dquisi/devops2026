Prompts 1. Creación del proyecto

Actúa como un desarrollador frontend senior.

Quiero un proyecto web mínimo en JavaScript, simple y funcional, preparado para una práctica DevOps.

Genera todo lo necesario para:
- una página web básica con index.html y app.js
- un botón para cargar datos desde una API pública
- consumo de esta API: https://jsonplaceholder.typicode.com/users/1
- mostrar en pantalla name, email y city
- validar los datos antes de mostrarlos
- mostrar errores si los datos son inválidos
- manejar errores de red
- separar la lógica en módulos:
  - src/api.js
  - src/validator.js
- crear pruebas unitarias con Jest para:
  - datos válidos
  - email inválido
  - nombre vacío
  - ciudad vacía
  - error de red
  - respuesta incompleta de la API

Entrégame:
1. la estructura de carpetas
2. el contenido completo de cada archivo
3. package.json con scripts:
   - test
   - test:ci

No generes documentación.
No uses frameworks ni estilos innecesarios.
Prioriza simplicidad, claridad y compatibilidad con GitHub Pages.

Prompts 2. Despliegue del proyecto

Actua como un ingeniero de DevOps senior en GitHub.


Genera un pipeline  CI/CD con GitHub Actions para le proyecto de JavaScript  con dos ramas:
- develop
-main
Reglas:
-En develop solo debe ejecutarse pruebas y validacoines en GitHub Actions.
-En main deben ejecutarse pruebas, validaciones y publicaciones.
- El workflow debe ejecutarse con push y pull_resquest sobre develop y main.
- Usa la version de ubuntu-lastest
- Instala dependencias con npm install
-Usa Node.js 20
-Ejecuta npm run test:ci
- Agrega un job de validacion que verifique que exista:
  - index.html
  -app.js
 - src/api.js
  -src/validator.js
 -package.json

Estructura requerida para le workflow:
1. test.
2. validation
3. deploy

Condiciones:
- test y validation deben ejecutarse en develop y main
- deploy debe ejecutarse solo en el main.
- el YAML debe quedar limpio, comentado y listo para ejecutar en github actions.
Entregame uncamente el archivo completo.

Prompts 3.  Publicacion de GitHub Pages.

Actua como un ingeniero de DevOps seniro en GitHub.


Genera un pipeline  CI/CD con GitHub Actions para le proyecto de JavaScript  con dos ramas:
- develop
-main
Reglas:
-En develop solo debe ejecutarse pruebas y validacoines en GitHub Actions.
-En main deben ejecutarse pruebas, validaciones y publicaciones.
- El workflow debe ejecutarse con push y pull_resquest sobre develop y main.
- Usa la version de ubuntu-lastest
- Instala dependencias con npm install
-Usa Node.js 20
-Ejecuta npm run test:ci
- Agrega un job de validacion que verifique que exista:
  - index.html
  -app.js
 - src/api.js
  -src/validator.js
 -package.json

Estructura requerida para le workflow:
1. test.
2. validation
3. deploy

Condiciones:
- test y validation deben ejecutarse en develop y main
- deploy debe ejecutarse solo en el main.
- el YAML debe quedar limpio, comentado y listo para ejecutar en github actions.
Entregame uncamente el archivo completo:
.github/workflows/ci-cd.yml

No generes mas documentaciion adicional