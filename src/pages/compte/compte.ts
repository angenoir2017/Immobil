import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompteAbonnePage} from "../compte-abonne/compte-abonne";
import {CompteHistoricComPage} from "../compte-historic-com/compte-historic-com";
import {ComptePaiementPage} from "../compte-paiement/compte-paiement";

/**
 * Generated class for the ComptePage page.
 *
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {
  menus =[
    {title:'Modes de paiement', icon: 'card', component: ComptePaiementPage},
    {title:'Epingles', icon: 'bookmark', component: CompteAbonnePage},
    {title:'Historique des commandes', icon: 'list', component: CompteHistoricComPage}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }
  onPage(theComponent){
    this.navCtrl.push(theComponent);
  }

}
