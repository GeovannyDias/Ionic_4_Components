import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopinfoComponent } from './popinfo/popinfo.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PopoverGeoComponent } from './popover-geo/popover-geo.component';




@NgModule({
  declarations: [
    HeaderComponent,
    PopinfoComponent,
    MenuComponent,
    PopoverGeoComponent
  ],
  exports: [
    HeaderComponent,
    PopinfoComponent,
    MenuComponent,
    PopoverGeoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class ComponentsModule { }
