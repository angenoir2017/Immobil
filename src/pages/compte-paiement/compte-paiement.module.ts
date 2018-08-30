import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComptePaiementPage } from './compte-paiement';

@NgModule({
  declarations: [
    ComptePaiementPage,
  ],
  imports: [
    IonicPageModule.forChild(ComptePaiementPage),
  ],
})
export class ComptePaiementPageModule {}
