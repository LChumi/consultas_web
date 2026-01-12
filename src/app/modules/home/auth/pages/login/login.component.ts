import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../../services/usuario.service';
import {Router} from "@angular/router";
import { DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';
import { Usuarios } from 'src/app/core/models/usuarios';
import { DataService } from 'src/app/core/services/data.service';
import {LoginRequest} from "../../../../../core/models/auth/loginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm=this.formBuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  logoUrl!:SafeResourceUrl;

  selection!: Usuarios;

  constructor(private formBuilder:FormBuilder,private userService:UsuarioService, private router:Router,private sanitizer:DomSanitizer,private dataSvc: DataService) { }

  ngOnInit(): void {
    const logoPath= 'assets/images/cumple-logo.png';
    this.logoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(logoPath);
    this.dataSvc.selectedUser$.subscribe((usuario:Usuarios)=> this.selection= usuario);
  }

  get username(){
    return this.loginForm.controls.username
  }
  get password(){
    return this.loginForm.controls.password
  }

  goToConsultas():void{
    this.router.navigate(['/consultas'])
  }


  login() {
    if (this.loginForm.valid){
      const  username = this.loginForm.controls.username.value;
      const  password = this.loginForm.controls.password.value;

      if (username !== null && password !== null){
        const loginData:LoginRequest ={
          username:username,
          password:password
        };

        this.userService.login(loginData).subscribe(
          (data: any) => {
            if (data != null) {
              // Almacenar información en el almacenamiento local
              localStorage.setItem('id_usuario', String(data.usr_codigo));
              localStorage.setItem('id_empresa', String(data.usr_empresa_def));
              localStorage.setItem('username', String(data.usr_id));
              localStorage.setItem('isLoggedIn', 'true');
              this.userService.setIsLoggedIn(true);
              this.loginForm.reset();
              this.goToConsultas();
            } else {
              alert('Credenciales inválidas');
            }
          },
          (error: any) => {
            const code = error.status;

            if (code === 401) {
              Swal.fire({
                icon: 'error',
                text: 'Credenciales inválidas',
                footer: '<a href="">Importadora Cumpleaños</a>'
              });
            } else if (code === 500) {
              Swal.fire({
                icon: 'info',
                title: 'Error en el servidor',
                text: 'Vuelve a intentar más tarde',
                footer: '<a href="">Importadora Cumpleaños</a>'
              });
            }
          }
        );
      }else {
        this.loginForm.markAllAsTouched();
      }

    }
  }
}
