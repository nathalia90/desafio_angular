import { InicioGuard } from './autenticacao/inicio.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [InicioGuard],
  },
  {
    path: 'inicio',
    loadChildren: () =>
    import('./inicio/inicio.module').then((m) => m.InicioModule),
    canLoad: [AutenticacaoGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
