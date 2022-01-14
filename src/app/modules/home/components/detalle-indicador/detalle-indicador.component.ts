import { Component, Input, OnInit } from '@angular/core';
import { Indicador } from 'src/app/shared/models/indicador';


@Component({
  selector: 'app-detalle-indicador',
  templateUrl: './detalle-indicador.component.html',
  styleUrls: ['./detalle-indicador.component.css']
})
export class DetalleIndicadorComponent implements OnInit {
  in_ind:Indicador;

  @Input() set indicador(data:Indicador){
    if(data){
      this.in_ind = data;
    }
  }
  constructor() { }

  ngOnInit(): void {

  }



}
