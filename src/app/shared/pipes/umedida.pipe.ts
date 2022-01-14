import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'umedida',
})
export class UmedidaPipe implements PipeTransform {
  transform(unidadmedida: String, args: string): Number {
    switch (unidadmedida) {
      case 'Pesos':
        return 1;
        break;

      case 'Porcentaje':
        return 2;
        break;

      case 'Dólar':
        return 3;
        break;

      default:
        return 0;
        break;
    }
  }
}
