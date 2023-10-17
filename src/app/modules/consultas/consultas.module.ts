import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';

import { ConsultaProductosComponent } from './productos/pages/consulta-productos/consulta-productos.component';
import { ListaBodegasComponent } from './bodegas/pages/lista-bodegas/lista-bodegas.component';

import { FormsModule } from '@angular/forms';
import { ImagenRotaDirective } from 'src/app/directives/imagen-rota.directive';
import { IvaPipe } from './productos/pipes/iva.pipe';


@NgModule({
  declarations: [
    ListaBodegasComponent,
    ConsultaProductosComponent,
    ImagenRotaDirective,
    IvaPipe
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule
  ]
})
export class ConsultasModule { }
