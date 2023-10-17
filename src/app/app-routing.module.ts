import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes =[
  {
    path: 'Cumpleaños',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'Consultas',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/consultas/consultas.module').then(m => m.ConsultasModule)
  },
  {
    path: '**',
    redirectTo: '/Cumpleaños/inicio'
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
