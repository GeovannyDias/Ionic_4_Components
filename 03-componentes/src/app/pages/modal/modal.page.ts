import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    const modal = await this. modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Geovanny',
        pais: 'Ecuador',
        obj: ['Geo', 'D']
      }
    });
    await modal.present();
  }

}
