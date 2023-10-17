import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IvaPipe implements PipeTransform {

  transform(value:number): number {
    const ivaRate = 0.12;
    const ivaAmount = value * ivaRate;
    return value + ivaAmount;
  }

}
