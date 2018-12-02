import {Component} from "@angular/core";
import {IonicPage, NavController, LoadingController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth/auth";
import 'rxjs/add/operator/map';
import {Storage} from "@ionic/storage";
//import {HomePage} from "../home/home";
//import {JwtHelperService} from '@auth0/angular-jwt';

@IonicPage()
@Component({
  selector: 'page-inscription',
  templateUrl: 'inscription.html',
})
export class InscriptionPage {

  tel: string ;
  codeConf:any;
  loading: any;
  authType: string = "login";
  userToken: string;
  userCode: string;
  afficherTelephone:boolean = true;
  afficherCodePage:boolean =false;

  constructor(private auth: AuthProvider,private storage: Storage, private nav: NavController,public loadingCtrl: LoadingController) {
   // this.nav.setRoot('HomePage');
  this.storage.get('id_token').then(token =>
    {
      if (token) {
        console.log(token);
        this.userToken = token;
           }
    });


  }

  //Authentification d'utilisateur
  login() {

    this.showLoader();
      this.auth.login(this.tel).then((success) => {
        this.loading.dismiss();
        this.afficherTelephone = false;
        this.afficherCodePage = true;


      },
      (err) => {
        console.log(err);
        this.loading.dismiss();
      });



  }

  confirmCode(codeConf){

    this.storage.get('codeSecret').then(code =>
    {
      if (code) {
        console.log(code);
        if(codeConf == code){
          this.nav.setRoot('HomePage');

        }
      }
    });

    this.storage.remove('codeSecret');

  }

  AfficheHomePage(){
    this.nav.setRoot('HomePage');
  }

  // Creation de compte
  /*signup() {
    this.showLoader();

    let credentials = {
      email: this.email,
      password: this.password
    };

    if(this.password === this.passwordConf ){
      this.auth.signup(credentials).then(
        (success) =>{
          this.loading.dismiss();
          this.nav.setRoot('HomePage');

        },
        (err) => {
          console.log(err)
          this.loading.dismiss();
        });
    }else{
      console.log('les mot de passe sont differents')
    }

  }*/

  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Authentication en cour...'
    });

    this.loading.present();
  }

}
