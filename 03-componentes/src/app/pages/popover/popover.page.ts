import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';
import { PopoverGeoComponent } from 'src/app/components/popover-geo/popover-geo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop( ev){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: ev,
      mode: 'ios',
      backdropDismiss: false

    });
    await popover.present();

    // const{ data } = await popover.onDidDismiss();
    const{ data } = await popover.onWillDismiss();
    console.log('Padre: ', data);

  }

  // ===================================================================
  // Popover - Geo
  async showPopGeo(){
    const popover = await this.popoverCtrl.create({
      component: PopoverGeoComponent,
      // showBackdrop: true,
      keyboardClose: true,
      animated: true,
      // event: ev,
      mode: 'ios',
      backdropDismiss: false

    });
    await popover.present();

    // const{ data } = await popover.onDidDismiss();
    const{ data } = await popover.onWillDismiss();
    console.log('Padre: ', data);

  }



}
