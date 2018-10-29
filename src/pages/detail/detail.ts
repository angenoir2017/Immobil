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
  selectedItem: any;
  images: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.images = ['pub.jpg','logo.png','wall.jpg','reap.jpg'];
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  louer(){
    this.navCtrl.push('PayementPage');
  }

}
