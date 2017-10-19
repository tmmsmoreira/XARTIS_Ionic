import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Xartis } from './app.component';

import { CitiesPage } from '../pages/cities/cities';
import { NearbyPage } from '../pages/nearby/nearby';
import { CameraPage } from '../pages/camera/camera';
import { RoutesPage } from '../pages/routes/routes';
import { PurchasesPage } from '../pages/purchases/purchases';

import { CityPageModule } from '../pages/city/city.module';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    Xartis,
    CitiesPage,
    NearbyPage,
    CameraPage,
    RoutesPage,
    PurchasesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Xartis),
    CityPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Xartis,
    CitiesPage,
    NearbyPage,
    CameraPage,
    RoutesPage,
    PurchasesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
