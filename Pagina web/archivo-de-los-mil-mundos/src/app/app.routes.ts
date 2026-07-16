import { Routes } from '@angular/router';
import { RUTAS } from '@core/constants/rutas.constants';
import { authGuard } from '@core/guards/auth.guard';
import { adminGuard } from '@core/guards/admin.guard';

/**
 * Árbol de rutas raíz. Todas las features se cargan de forma perezosa
 * (lazy loading) mediante `loadComponent`, lo que mantiene el bundle
 * inicial pequeño. Cada feature define sus propias sub-rutas si las necesita
 * (p.ej. `story/story.routes.ts` para pestañas internas).
 *
 * Los componentes reales (HomeComponent, StoryComponent, etc.) se generan
 * en la Fase de Páginas correspondiente; aquí solo se fija el contrato de
 * navegación para que la arquitectura quede cerrada desde el principio.
 */
export const routes: Routes = [
  {
    path: RUTAS.HOME,
    loadComponent: () =>
      import('@features/home/home.component').then((m) => m.HomeComponent),
    title: 'El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.EXPLORAR,
    loadComponent: () =>
      import('@features/explore/explore.component').then((m) => m.ExploreComponent),
    title: 'Explorar · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.CATALOGO,
    loadComponent: () =>
      import('@features/stories/stories.component').then((m) => m.StoriesComponent),
    title: 'Catálogo · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.ORIGINALES,
    loadComponent: () =>
      import('@features/stories/stories.component').then((m) => m.StoriesComponent),
    data: { soloOriginales: true },
    title: 'Originales · El Archivo de los Mil Mundos',
  },
  {
    path: `${RUTAS.HISTORIA}/:id`,
    loadComponent: () =>
      import('@features/story/story.component').then((m) => m.StoryComponent),
    title: 'Historia · El Archivo de los Mil Mundos',
  },
  {
    path: `${RUTAS.LEER}/:id/:capitulo`,
    loadComponent: () =>
      import('@features/reader/reader.component').then((m) => m.ReaderComponent),
    title: 'Leyendo · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.PERFIL,
    loadComponent: () =>
      import('@features/profile/profile.component').then((m) => m.ProfileComponent),
    canActivate: [authGuard],
    title: 'Mi perfil · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.BIBLIOTECA,
    loadComponent: () =>
      import('@features/library/library.component').then((m) => m.LibraryComponent),
    canActivate: [authGuard],
    title: 'Mi biblioteca · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.FAVORITOS,
    loadComponent: () =>
      import('@features/favorites/favorites.component').then((m) => m.FavoritesComponent),
    canActivate: [authGuard],
    title: 'Favoritos · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.AUTORA,
    loadComponent: () =>
      import('@features/author/author.component').then((m) => m.AuthorComponent),
    title: 'Sobre la autora · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.CONTACTO,
    loadComponent: () =>
      import('@features/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contacto · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.LOGIN,
    loadComponent: () =>
      import('@features/authentication/login.component').then((m) => m.LoginComponent),
    title: 'Iniciar sesión · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.REGISTRO,
    loadComponent: () =>
      import('@features/authentication/register.component').then((m) => m.RegisterComponent),
    title: 'Crear cuenta · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.ADMIN,
    loadChildren: () =>
      import('@features/admin/admin.routes').then((m) => m.adminRoutes),
    canActivate: [authGuard, adminGuard],
  },
  {
    path: RUTAS.CONFIGURACION,
    loadComponent: () =>
      import('@features/settings/settings.component').then((m) => m.SettingsComponent),
    canActivate: [authGuard],
    title: 'Configuración · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.BIBLIOTECARIO,
    loadComponent: () =>
      import('@features/ai-assistant/librarian.component').then((m) => m.LibrarianComponent),
    title: 'El Bibliotecario · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.PERSONAJES,
    loadComponent: () =>
      import('@features/explore/explore.component').then((m) => m.ExploreComponent),
    data: { vista: 'personajes' },
    title: 'Personajes · El Archivo de los Mil Mundos',
  },
  {
    path: RUTAS.COMUNIDAD,
    loadComponent: () =>
      import('@features/community/community.component').then((m) => m.CommunityComponent),
    title: 'Comunidad · El Archivo de los Mil Mundos',
  },
  {
    path: '**',
    loadComponent: () =>
      import('@shared/components/empty-state/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'Página no encontrada · El Archivo de los Mil Mundos',
  },
];
