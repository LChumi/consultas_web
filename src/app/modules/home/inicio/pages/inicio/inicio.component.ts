import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  fondoPath = './assets/images/fondoPantalla.jpg';
  cajaRegalo= './assets/images/cajaregalo.jpg';
  globos= './assets/images/globos.jpg';
  decoracion= './assets/images/decoracion.jpg';
  caja_Regalo= './assets/images/caja_regalo.jpg';

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1560: {
          slidesPerView: 3
        }
      },
      autoplay: {
        delay: 100,
        disableOnInteraction: false
      }
    });    
  }
}
