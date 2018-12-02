import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    DetailPage
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    IonicImageViewerModule
  ],
  exports:[
    DetailPage
  ]
})
export class DetailPageModule {}
