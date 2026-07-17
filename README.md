# El Archivo de los Mil Mundos
Plataforma de lectura de historias originales y fanfics, construida con **Angular 20** (Standalone Components + Signals), **Firebase** (Auth, Firestore, Storage, Hosting) y **SCSS**, siguiendo **Clean Architecture**.
> Este repositorio se genera por fases desde una arquitectura Senior. Consulta `docs/architecture/` para el detalle de cada capa.

## Stack
- **Angular 20** — Standalone Components, Signals, `provideRouter` con lazy loading.
- **Firebase** — Authentication, Firestore, Storage, Hosting, Cloud Functions.
- **SCSS** — arquitectura 7-1 simplificada (abstracts/base/layout/themes/variables/mixins/animations).
- **Sin NgRx** — el estado se gestiona con Signals nativos en services inyectables (ver `docs/architecture/estado.md`).

## Estructura de carpetas
Ver `estructura.txt` (fuente original) y `docs/architecture/capas.md` para la correspondencia exacta con Clean Architecture.

```
src/app/
├── core/        → lógica transversal: auth, guards, interceptors, services, config, helpers
├── shared/       → componentes/pipes/directivas/modelos reutilizables, sin lógica de negocio propia
├── features/     → una carpeta por página/dominio funcional (home, story, reader, admin...)
└── store/        → signals compartidos entre features cuando aplica
```

## Fuente de datos
Todo el contenido narrativo proviene de `src/assets/json/biblioteca.json`, fiel al JSON original proporcionado (6 historias, 2 sagas, 4 universos). **No se ha reanalizado ni reinventado ningún dato de las novelas.**

## Diseño
El sistema visual (paleta esmeralda/oro, tipografías Cinzel + EB Garamond, estética de "grimorio") proviene del prototipo Figma adjunto y se ha volcado fielmente en `src/styles/variables/_colors.scss` y `_typography.scss`.

## Fases de generación
1. **Arquitectura** — estructura completa, sin componentes de UI.
2. **Componentes reutilizables** — Navbar, Footer, StoryCard, Reader, Hero, Sidebar, Modal, Toast, Search, etc.
3. **Firebase** — Auth, Firestore, Storage, Guards, Interceptors, Signals.
4. **Página Home**.
5. **Página Reader**.
6. **Panel administrador (Dashboard)**.
7. **El Bibliotecario (IA)**.

## Scripts
```bash
npm install
npm start              # ng serve
npm run build:prod     # build de producción
npm run firebase:emulators
npm run firebase:deploy
```
