# 🚀 PROYECTO FINAL — Pipeline DevOps Completo

**Curso:** Fundamentos de DevOps potenciado con IA  
**Instructores:** Jordan Murillo & Diego Quisi  
**Duración estimada:** 60–90 minutos  
**Modalidad:** Individual  
**Entregable:** Informe en PDF con capturas de pantalla + URL del repositorio

---

## 🎯 Objetivo

Demostrar que dominas el pipeline completo que construiste durante el curso: desde el repositorio Git hasta la imagen Docker publicada en GHCR, pasando por el sitio en vivo con GitHub Pages, el stack Docker Compose corriendo localmente, y las capas de seguridad activas con Dependabot y CodeQL.

No construyes nada nuevo — **evidencias y documentas lo que ya funciona**.

---

## Lo que debes tener funcionando

Antes de armar el informe, verifica que tu repositorio tenga todo esto activo:

```
tu-repo/
├── .github/
│   └── workflows/
│       ├── deploy.yml          ← GitHub Pages (Práctica 3.2)
│       ├── docker-ghcr.yml     ← Imagen en GHCR (Práctica 4)
│       └── codeql.yml          ← Análisis de seguridad (Práctica 6/7)
├── src/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── Dockerfile                  ← construye la imagen nginx
├── docker-compose.yml          ← stack web + API (Práctica 5)
├── nginx.conf
├── db.json
├── package.json                ← para Dependabot
└── index.js                    ← con las vulnerabilidades demo
```

---

## 📋 Estructura del informe

El informe debe estar organizado en **5 secciones**, cada una con una captura de pantalla y una explicación breve. No necesitas redactar párrafos largos — dos o tres oraciones por sección son suficientes.

---

### Sección 1 — Repositorio y Workflows activos

**Qué mostrar:**

Captura de la pestaña **Actions** de tu repositorio en GitHub donde se vean los tres workflows con ✅ verde:

- `Deploy a GitHub Pages`
- `Build y Publish imagen Docker en GHCR`
- `CodeQL`

**Captura requerida:** pestaña Actions con los tres workflows exitosos visibles.

**Explica en 2–3 oraciones:**
- ¿Qué evento dispara cada workflow? (push a main, tag, push + PR)

---

### Sección 2 — Sitio en vivo con GitHub Pages

**Qué mostrar:**

Tu sitio funcionando en la URL pública de GitHub Pages.

**Captura requerida:** el navegador abierto en `https://TU_USUARIO.github.io/TU_REPO` con el sitio cargado y la URL visible en la barra de direcciones.

**Explica en 2–3 oraciones:**
- ¿Qué workflow publica el sitio automáticamente?
- ¿Qué carpeta/archivos se despliegan?

---

### Sección 3 — Imagen Docker en GHCR

**Qué mostrar:**

Tu imagen publicada en GitHub Container Registry con sus etiquetas de versión.

**Pasos para llegar:**
1. Ve a `github.com/TU_USUARIO` → pestaña **Packages**
2. Haz clic en tu imagen `tu-repo`
3. Verifica que aparezcan las etiquetas `1.0.0`, `1.0` y `latest`

**Captura requerida:** la página del paquete en GHCR mostrando el nombre de la imagen y las etiquetas disponibles.

**Explica en 2–3 oraciones:**
- ¿Qué evento dispara la publicación de la imagen?
- ¿Por qué se generan tres etiquetas a partir de un solo tag?

---

### Sección 4 — Stack Docker Compose corriendo localmente

**Qué mostrar:**

El stack de dos contenedores (web + API) corriendo en tu máquina.

**Pasos:**

```bash
cd mi-stack-compose   # o donde tengas el docker-compose.yml
docker compose up -d
docker compose ps
```

Abre `http://localhost:8080` en el navegador.

**Capturas requeridas (2):**
1. La terminal mostrando `docker compose ps` con ambos contenedores en estado `running`
2. El navegador en `http://localhost:8080` con los productos y categorías cargados desde la API

**Explica en 2–3 oraciones:**
- ¿Por qué el servicio `api` no tiene `ports` definidos en el `docker-compose.yml`?
- ¿Cómo sabe nginx dónde encontrar a la API?

Cuando termines:

```bash
docker compose down
```

---

### Sección 5 — Seguridad: Dependabot y CodeQL

**Qué mostrar:**

Las dos capas de seguridad activas en tu repositorio.

#### 5a — Alertas de Dependabot

Ve a **Security → Dependabot alerts** en tu repositorio.

**Captura requerida:** la lista de alertas mostrando al menos `lodash` o `express` con su CVE y severidad.

#### 5b — Alertas de CodeQL

Ve a **Security → Code scanning alerts**.

**Captura requerida:** al menos una alerta de CodeQL (Code Injection o Path Traversal) mostrando el archivo y la línea detectada.

**Explica en 2–3 oraciones:**
- ¿Qué diferencia hay entre lo que detecta Dependabot y lo que detecta CodeQL?
- ¿Cómo corregirías la vulnerabilidad del `eval()` que CodeQL detectó?

---

## 📄 Formato del informe

Entrega un **PDF** con:

- Portada con tu nombre, fecha y URL del repositorio
- Las 5 secciones en orden, cada una con: título, captura(s) y explicación
- No hay mínimo de páginas — lo importante es que las capturas sean claras y las explicaciones sean correctas

**Nombre del archivo:** `PROYECTO_FINAL_TuNombre.pdf`

---

## ✅ Checklist antes de entregar

- [ ] Repositorio público visible en GitHub
- [ ] Tres workflows con ✅ verde en la pestaña Actions
- [ ] Sitio funcionando en `https://TU_USUARIO.github.io/TU_REPO`
- [ ] Imagen visible en GitHub Packages con etiquetas de versión
- [ ] `docker compose ps` muestra dos contenedores en estado `running`
- [ ] Navegador en `localhost:8080` muestra productos y categorías
- [ ] Al menos una alerta de Dependabot con CVE visible
- [ ] Al menos una alerta de CodeQL con archivo y línea visible
- [ ] Informe en PDF con las 5 secciones y capturas claras
- [ ] URL del repositorio incluida en la portada del informe

---

## 🆘 Problemas comunes

| Problema | Solución rápida |
|----------|----------------|
| Workflow no aparece en verde | Ve a Actions, haz clic en el workflow fallido y lee el log de error |
| GitHub Pages no carga | Settings → Pages → Source debe ser "GitHub Actions". Espera 2 min y recarga con Ctrl+Shift+R |
| Imagen no aparece en Packages | Verifica que creaste y subiste el tag: `git push origin v1.0.0` |
| `docker compose ps` muestra `Exit` en la API | Revisa que `db.json` tenga JSON válido (sin comas finales) |
| Dependabot no muestra alertas | Confirma que Settings → Security → Dependency graph y Dependabot alerts están activados |
| CodeQL no muestra alertas tras 8 min | Verifica en Actions que el workflow `CodeQL` terminó con ✅ antes de buscar en Security |

---

*Curso: Fundamentos de DevOps potenciado con IA · Jordan Murillo & Diego Quisi*
