import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ParametrePage} from "../pages/parametre/parametre";
import {ComptePage} from "../pages/compte/compte";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';
  menus =[
    {title:'Acceuil', icon: 'home', component: 'HomePage'},
    {title:'Compte', icon: 'person', component: 'ComptePage'},
    {title:'Parametre', icon: 'settings', component: 'ParametrePage'}
  ];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onPage(m){
    //  console.log("Ca marche le click");
    this.rootPage= m.component;
  }
}

