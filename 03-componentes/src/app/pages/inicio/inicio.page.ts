import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ComponenteI } from '../../model/interfaces';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<ComponenteI[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    console.log(this.componentes);
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

}
