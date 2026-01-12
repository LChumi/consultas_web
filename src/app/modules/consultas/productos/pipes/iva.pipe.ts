import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IvaPipe implements PipeTransform {

  transform(value:number): number {
    const ivaRate = 0.15;
    const ivaAmount = value * ivaRate;
    return value + ivaAmount;
  }

}
