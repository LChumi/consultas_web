import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaBodegasComponent } from './bodegas/pages/lista-bodegas/lista-bodegas.component';
import { ConsultaProductosComponent } from './productos/pages/consulta-productos/consulta-productos.component';

const routes: Routes = [
{
  path:'',
  children:[
    {path:'bodegas',component:ListaBodegasComponent},
    {path:'consulta_precios',component:ConsultaProductosComponent},
    {path:'**',redirectTo:'bodegas'}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
