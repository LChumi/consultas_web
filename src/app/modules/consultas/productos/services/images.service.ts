import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/assets/config';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private baseUrl: string = API_URL + "images/";

  constructor(private http: HttpClient) { }

  getImagen(imagen: any): Observable<Blob> {
    return this.http.get(this.baseUrl + imagen, { responseType: 'blob' });
  }

}
