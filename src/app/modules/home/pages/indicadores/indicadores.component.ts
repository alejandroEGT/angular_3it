import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndicadoresService } from 'src/app/shared/services/indicadores.service';
import { Indicador } from '../../../../shared/models/indicador';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css'],
})
export class IndicadoresComponent implements OnInit {
  indicadores: Indicador[];
  indicador: Indicador;
  page: Number = 1;
  show: Boolean = true;

  constructor(private _indicador: IndicadoresService, public router:Router) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.show = true;
    this._indicador.listar().subscribe((res) => {
      this.indicadores = Object.values(res).filter((i) => {
        if (typeof i === 'object') return i;
      });
      this.show = false;
    });
  }

  pasar_detalle(i:Indicador){
    this.indicador=i;
  }

  redirect(ruta, tipo){
    this.router.navigate([`${ruta}`, tipo]);
  }
}
