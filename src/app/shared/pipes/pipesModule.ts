import { NgModule } from '@angular/core';
import { UmedidaPipe } from './umedida.pipe';
import { valorPipe } from './valor.pipe';

@NgModule({
  imports: [],
  declarations: [UmedidaPipe, valorPipe],
  exports: [UmedidaPipe, valorPipe],
})
export class PipesModule {}
