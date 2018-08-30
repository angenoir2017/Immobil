import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompteAbonnePage } from './compte-abonne';

@NgModule({
  declarations: [
    CompteAbonnePage,
  ],
  imports: [
    IonicPageModule.forChild(CompteAbonnePage),
  ],
})
export class CompteAbonnePageModule {}
