import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega } from 'src/app/core/models/bodega';
import { API_URL } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private baseUrl:string=API_URL+'bodegas/';

  constructor(private http:HttpClient) { }

  getBodegas(bod_usuario:any,bod_empresa:any):Observable<Bodega[]>{
    return this.http.get<Bodega[]>(this.baseUrl+'listBodegas/'+bod_usuario+'/'+bod_empresa);
  }
}
