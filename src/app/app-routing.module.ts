import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes =[
  {
    path: 'verificador',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'consultas',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {
    path: '**',
    redirectTo: '/verificador/inicio'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
