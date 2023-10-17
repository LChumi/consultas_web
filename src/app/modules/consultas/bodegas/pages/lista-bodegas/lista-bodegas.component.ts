import { Component, OnInit } from '@angular/core';
import { Bodega } from 'src/app/core/models/bodega';
import { BodegaService } from '../../services/bodega.service';
import { DataService } from 'src/app/core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-bodegas',
  templateUrl: './lista-bodegas.component.html',
  styleUrls: ['./lista-bodegas.component.css']
})
export class ListaBodegasComponent implements OnInit {

  selectedBodega!: Bodega;
  lista_bodegas:Bodega[]=[];
  id_usuario:any;
  id_empresa:any;

  constructor(private bodegaService:BodegaService,private router:Router,private dataSvc:DataService) { }

  ngOnInit(): void {
    this.id_usuario=localStorage.getItem('id_usuario');
    this.id_empresa=localStorage.getItem('id_empresa');
    this.listarBodegas()
  }

  listarBodegas():void{
    this.bodegaService.getBodegas(this.id_usuario,this.id_empresa).subscribe(
      (listarBodegas:Bodega[])=> this.lista_bodegas=listarBodegas
    )
  }

  id_bod:any
  seleccionarBod(bodega:Bodega):void{
    this.selectedBodega=bodega;
    this.id_bod=this.selectedBodega.bod_codigo;
    console.log(this.id_bod)
    localStorage.setItem('bod_id',String(this.selectedBodega.bod_codigo));
    this.router.navigate(['Consultas/consulta_precios'])
  }

}
