import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompteEpinglePage } from './compte-epingle';

@NgModule({
  declarations: [
    CompteEpinglePage,
  ],
  imports: [
    IonicPageModule.forChild(CompteEpinglePage),
  ],
  exports:[
    CompteEpinglePage
  ]
})
export class CompteEpinglePageModule {}
