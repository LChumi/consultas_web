import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bodega } from '../models/bodega';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuario$ = new BehaviorSubject<Usuarios>(new Usuarios());
  private bodega$ = new BehaviorSubject<Bodega>(new Bodega());
  
  constructor() { }

  get selectedUser$(): Observable<Usuarios> {
    return this.usuario$.asObservable();
  }

  setUser(user: Usuarios): void {
    this.usuario$.next(user);
  }

  get selectedBodega$(): Observable<Bodega> {
    return this.bodega$.asObservable();
  }

  setBodega(bodega: Bodega): void {
    this.bodega$.next(bodega);
  }
}
