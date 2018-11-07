import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComptePage page.
 *
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory:['HomePage']
})
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {
  menus =[
    {title:'Modifier photo de profil', icon: 'md-camera',},
    {title:'Modifier vos information', icon: 'md-hammer',},
    {title:'Modes de paiement', icon: 'card', component: 'ComptePaiementPage'},
    {title:'Articles epingles', icon: 'bookmark', component: 'CompteEpinglePage'},
    {title:'Historique des operations', icon: 'list', component: 'CompteHistoricComPage'},
    {title:'Aide', icon: 'help',},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComptePage');
  }
  onPage(theComponent){
    this.navCtrl.push(theComponent);
  }

}
