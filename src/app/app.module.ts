import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// pages
import { DemarragePage } from '../pages/demarrage/demarrage';
import { FightPage } from '../pages/fight/fight';
import { HomePage } from '../pages/home/home';
import { DicesPage } from '../pages/dices/dices';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage'

@NgModule({
  declarations: [
    MyApp,
    DemarragePage,
    FightPage,
    HomePage,
    DicesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(
      {
        name: '__mydb',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DemarragePage,
    FightPage,
    HomePage,
    DicesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
