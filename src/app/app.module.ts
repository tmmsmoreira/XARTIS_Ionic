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
import { RoutePageModule } from '../pages/route/route.module';
import { MapPageModule } from '../pages/map/map.module';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

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
    CityPageModule,
    RoutePageModule,
    MapPageModule
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
    Geolocation,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
