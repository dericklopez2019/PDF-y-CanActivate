import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

//Opciones del menu
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opts.json')
  }

}
