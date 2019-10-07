import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { ComponenteI } from 'src/app/model/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Observable<ComponenteI[]>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }

}
