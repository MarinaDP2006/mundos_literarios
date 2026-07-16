import { Routes } from '@angular/router';

/**
 * Sub-rutas del panel de administrador. Solo se genera el Dashboard en esta
 * fase inicial (según alcance solicitado); el resto de vistas de admin
 * (gestión de historias, usuarios, etc.) se añadirán como hijas aquí mismo.
 */
export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    title: 'Panel de administración · El Archivo de los Mil Mundos',
  },
];
