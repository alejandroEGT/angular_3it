import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Precio } from 'src/app/shared/models/precio';
import { IndicadoresService } from '../../../../shared/services/indicadores.service';

@Component({
  selector: 'app-detalle-valores-indicador',
  templateUrl: './detalle-valores-indicador.component.html',
  styleUrls: ['./detalle-valores-indicador.component.css']
})
export class DetalleValoresIndicadorComponent implements OnInit {
  tipo: string;
  precios:Precio;
  page: Number = 1;
  show: Boolean = true;
  unidad_medida: string;
  nombre: string;


  constructor(private route: ActivatedRoute, private _indicador:IndicadoresService) {
    this.tipo = this.route.snapshot.params['codigo'];
   }

  ngOnInit(): void {
    this.traer();
  }

  traer(){
    this.show = true;
    this._indicador.listar_por_tipo(this.tipo).subscribe(res =>{

      this.unidad_medida = res['unidad_medida'];
      this.nombre = res['nombre'];

      const get = Object.values(res).filter((i) => {
        if (typeof i === 'object') return i;
      });

      this.precios = get[0];
      this.show = false;


    })
  }



}
