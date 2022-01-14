import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Indicador } from '../models/indicador';

@Injectable({
  providedIn: 'root',
})
export class IndicadoresService {
  private apiUrl = environment.url;

  constructor(private http: HttpClient) {}

  listar(): Observable<Indicador[]> {
    var url = `${this.apiUrl}`;
    return this.http.get<Indicador[]>(url);
  }

  listar_por_tipo(tipo: String): Observable<Indicador[]> {
    var url = `${this.apiUrl}/${tipo}`;
    return this.http.get<Indicador[]>(url);
  }
}
