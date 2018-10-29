import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesimmobPage } from './mesimmob';



@NgModule({
  declarations: [
    MesimmobPage,
  ],
  imports: [
    IonicPageModule.forChild(MesimmobPage),
  ],
  exports:[
   MesimmobPage
  ]
})
export class MesimmobPageModule {}
