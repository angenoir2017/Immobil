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

  img = ['pub.jpg','logo.png','wall.jpg','reap.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  louer(){
    this.navCtrl.push('PayementPage');
  }

}
