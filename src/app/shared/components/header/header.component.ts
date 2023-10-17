import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/modules/home/auth/services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus = false;
  isLoggedIn = false;
  nombre: any;

  imagePath = './assets/images/cumple-logo.png';

  constructor(private router: Router, private userService: UsuarioService) { }

  ngOnInit(): void {
    this.userService.getIsLoggedIn().subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn) {
        this.nombre = localStorage.getItem('username');
      }
    });
  }
  
  

  SideNavToggle(): void {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }

  logout(): void {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/Cumpleaños/login']);
  }
}
