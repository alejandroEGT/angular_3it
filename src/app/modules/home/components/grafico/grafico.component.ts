import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IndicadoresService } from 'src/app/shared/services/indicadores.service';
import * as CanvasJS from '../canvasjs.min';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css'],
})
export class GraficoComponent implements OnInit {
  _tipo: string;
  indicadores: any;
  @Input() set tipo(data: string) {
    if (data) {
      this._tipo = data;
      this.grafico(this._tipo);
    }
  }
  constructor(
    private _indicador: IndicadoresService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {}

  grafico(tipo) {
    this._indicador.listar_por_tipo(this._tipo).subscribe((res) => {
      this.indicadores = Object.values(res).filter((i) => {
        if (typeof i === 'object') return i;
      });

      const datos_grafico = [];

      for (let index = 0; index < this.indicadores[0].length; index++) {
        let fecha = String(
          this.datePipe.transform(
            this.indicadores[0][index].fecha,
            'd MMM YYYY'
          )
        );
        datos_grafico.push({
          x: new Date(fecha),
          y: this.indicadores[0][index].valor,
        });
      }

      //CanvasJS spline chart to show orders from Jan 2015 to Dec 2015
      let ordersSplineChart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        backgroundColor: 'transparent',
        theme: 'light2',
        toolTip: {
          borderThickness: 0,
          cornerRadius: 0,
        },
        axisX: {
          labelFontSize: 14,
          // maximum: new Date("31 Dec 2055"),
          valueFormatString: 'DD MM YYYY',
        },
        axisY: {
          gridThickness: 0,
          labelFontSize: 14,
          lineThickness: 2,
        },
        data: [
          {
            type: 'spline',
            dataPoints: datos_grafico,
          },
        ],
      });
      ordersSplineChart.render();
    });
  }
}
