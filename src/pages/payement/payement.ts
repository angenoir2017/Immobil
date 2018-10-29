import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
//import { HttpClient,HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';


/**
 * Generated class for the PayementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  defaultHistory:['HomePage']
})
@Component({
  selector: 'page-payement',
  templateUrl: 'payement.html',
})
export class PayementPage {
  /*cardinfo: any = {
    number:'',
    expMonth:'',
    expYear:'',
    cvc:''
  }*/
  cardinfo = {
    number: '4242424242424242',
    expMonth: 12,
    expYear: 2020,
    cvc: '220'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public stripe:Stripe, public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayementPage');
  }
  /*payer(){
    this.stripe.setPublishableKey('pk_test_FRp4zC58OvzePft7UHIS05Z0');

    this.stripe.createCardToken(this.cardinfo)
      .then(token => console.log(token.id))
      .catch(error => console.error(error));
  }*/
payer(){
    this.stripe.setPublishableKey('pk_test_FRp4zC58OvzePft7UHIS05Z0');
 this.stripe.createCardToken(this.cardinfo).then((token) =>{

      this.http.post('http://192.168.43.8:3000/api/payer', token).subscribe((res) =>   alert('Transaction  en cour ... !')
      );

    })
   .catch(
     error => alert('Transaction  echoue !')
   );
  /* this.stripe.createCardToken(this.cardinfo)
  .then(token => console.log(token.id))
  .catch(error => console.error(error));*/
}

}
