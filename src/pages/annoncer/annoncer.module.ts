import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoncerPage } from './annoncer';

@NgModule({
  declarations: [
    AnnoncerPage
  ],
  imports: [
    IonicPageModule.forChild(AnnoncerPage)
  ],
  exports:[
    AnnoncerPage
  ]
})
export class AnnoncerPageModule {}
