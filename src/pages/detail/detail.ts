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
  public buttonClicked: boolean = false; //Whatever you want to initialise it as
  imgs = ['cll.jpg','cll.jpg','cll.jpg','cll.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  louer(){
    this.navCtrl.push('PayementPage');
  }
  public onButtonClick() {

    this.buttonClicked = !this.buttonClicked;
  }

}
