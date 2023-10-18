import { Injectable } from '@angular/core';
import { API_URL } from 'src/assets/config';
import { BehaviorSubject, Observable, } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { startWith } from 'rxjs/operators';
import {LoginRequest} from "../../../../core/models/auth/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = API_URL + 'usuarios/';

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  // Establecer el estado de inicio de sesión en base al valor almacenado
    this.isLoggedInSubject.next(isLoggedIn === 'true');
   }

  login(loginData:LoginRequest): Observable<any> {
    return this.http.post<any>(this.baseUrl+'login',loginData)
  }

  setIsLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable().pipe(startWith(this.isLoggedInSubject.value));
  }



}
