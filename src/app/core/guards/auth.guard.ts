import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuarioService } from 'src/app/modules/home/auth/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UsuarioService, private router: Router) {}

  canActivate(): Observable<boolean> {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      return of(true);
    } else {
      this.router.navigate(['/Cumpleaños/login']);
      return of(false);
    }
  }
}

