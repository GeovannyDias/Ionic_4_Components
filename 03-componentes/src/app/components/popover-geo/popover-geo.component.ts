import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-geo',
  templateUrl: './popover-geo.component.html',
  styleUrls: ['./popover-geo.component.scss'],
})
export class PopoverGeoComponent implements OnInit {

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {}
  
  onClick(valor: number){
    console.log('PopOver-Geo - Close');
    this.popoverCtrl.dismiss();

  }


}
