import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {IonicStorageModule} from "@ionic/storage";
import { ArticlesProvider } from '../providers/articles/articles';
import { Stripe } from '@ionic-native/stripe';
//import { IonicImageViewerModule } from 'ionic-img-viewer';
import {AuthProvider} from "../providers/auth/auth";

@NgModule({
  declarations: [
    MyApp


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    //IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticlesProvider,
    AuthProvider
  ]
})
export class AppModule {}
