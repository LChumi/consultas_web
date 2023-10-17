import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImagenRota]'
})
export class ImagenRotaDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('error')
  cargarImagenRota(){
    const element =this.elementRef.nativeElement
    element.src='assets/images/imagen_rota.jpg'
  }

}
