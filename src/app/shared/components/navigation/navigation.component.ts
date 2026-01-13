import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() sideNavStatus:boolean=false;

  list =[
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      routerLink: '/verificador/inicio'
    },
    {
      number: '1',
      name: 'Consultas',
      icon: 'fa-solid fa-barcode',
      routerLink: '/consultas'
    },
    {
      number: '1',
      name: 'Secciones',
      icon: 'fa-solid fa-warehouse',
      routerLink: '/verificador/inicio'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
