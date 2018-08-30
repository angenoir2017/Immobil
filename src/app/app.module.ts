import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from "@angular/common/http";
import {DetailPage} from "../pages/detail/detail";
import {ParametrePage} from "../pages/parametre/parametre";
import {IonicStorageModule} from "@ionic/storage";
import {ComptePage} from "../pages/compte/compte";
import {CompteHistoricComPage} from "../pages/compte-historic-com/compte-historic-com";
import {CompteAbonnePage} from "../pages/compte-abonne/compte-abonne";
import {ComptePaiementPage} from "../pages/compte-paiement/compte-paiement";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ComptePage,
    ComptePaiementPage,
    CompteAbonnePage,
    CompteHistoricComPage,
    ParametrePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage,
    ComptePage,
    ComptePaiementPage,
    CompteAbonnePage,
    CompteHistoricComPage,
    ParametrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
