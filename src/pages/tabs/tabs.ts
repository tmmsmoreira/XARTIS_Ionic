import { Component } from '@angular/core';

import { CitiesPage } from '../cities/cities';
import { NearbyPage } from '../nearby/nearby';
import { CameraPage } from '../camera/camera';
import { RoutesPage } from '../routes/routes';
import { PurchasesPage } from '../purchases/purchases';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = CitiesPage;
  tab2Root = NearbyPage;
  tab3Root = CameraPage;
  tab4Root = RoutesPage;
  tab5Root = PurchasesPage;

  constructor() {

  }
}
