import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage({
  defaultHistory:['HomePage']
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  public buttonlouer: boolean ; //Whatever you want to initialise it as
  public buttonacheter: boolean ;
  imgs = ['cll.jpg','cll.jpg','cll.jpg','cll.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.buttonlouer= this.navParams.get('param1');
    this.buttonacheter= this.navParams.get('param2');
  }

  louer(){
    this.navCtrl.push('PayementPage');
  }

}
