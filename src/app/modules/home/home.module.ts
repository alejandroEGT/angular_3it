import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { MenuComponent } from './components/menu/menu.component';
import { PadreComponent } from './pages/padre/padre.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from 'src/app/shared/pipes/PipesModule';
import { DetalleIndicadorComponent } from './components/detalle-indicador/detalle-indicador.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { DetalleValoresIndicadorComponent } from './pages/detalle-valores-indicador/detalle-valores-indicador.component';




@NgModule({
  declarations: [IndicadoresComponent, MenuComponent, PadreComponent, DetalleIndicadorComponent, GraficoComponent, DetalleValoresIndicadorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PipesModule,
    NgxPaginationModule,
  ],
  providers: [DatePipe],
})
export class HomeModule { }
