import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/pages/inicio/inicio.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'inicio',component:InicioComponent },
      { path:'login',component:LoginComponent},
      {path:'**',redirectTo:'inicio'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
