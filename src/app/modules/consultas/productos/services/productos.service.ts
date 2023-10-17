import { Injectable } from '@angular/core';
import { API_URL } from 'src/assets/config';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Producto } from 'src/app/core/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl:String =API_URL+"productos/";

  constructor(private http:HttpClient) { }

  getProducto(pro_id:any,bod_id:any):Observable<Producto>{
    return this.http.get<Producto>(this.baseUrl+'Buscar/'+pro_id+'/'+bod_id+'/barra/bodega');
  }

}
