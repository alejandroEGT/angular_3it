import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valor',
})
export class valorPipe implements PipeTransform {
  transform(unidadmedida: number, valor:number, args: string): String {
    switch (unidadmedida) {
      case 1:
        return `$${valor}`.replace('.',',');
        break;
      case 2:
        return `${valor}%`;
        break;
      case 3:
        return `$${valor}`.replace('.',',');
        break;
      default:
        return `${valor}`;
        break;
    }
  }
}
