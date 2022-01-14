import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndicadoresComponent } from './pages/indicadores/indicadores.component';
import { PadreComponent } from './pages/padre/padre.component';
import { DetalleValoresIndicadorComponent } from './pages/detalle-valores-indicador/detalle-valores-indicador.component';

const routes: Routes = [
  {
    path:'',
    component:PadreComponent,
    children:[
      { path:'', component:IndicadoresComponent },
      { path:'detalle/:codigo', component:DetalleValoresIndicadorComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
