import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
//import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FiltroPipe],
  exports: [
    FiltroPipe //Debemos exportarlo ya que sera utilizado fuera de este modulo
  ],
  imports: [
    //CommonModule

  ]
})
export class PipesModule { }
