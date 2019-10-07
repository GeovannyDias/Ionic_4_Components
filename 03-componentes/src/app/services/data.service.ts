import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponenteI } from '../model/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }


  getMenuOpts(){
    return this.http.get<ComponenteI[]>('/assets/data-menu/menu.json');
  }


}


