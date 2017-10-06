import { Component } from '@angular/core';

import { NearbyPage } from '../nearby/nearby';
import { CameraPage } from '../camera/camera';
import { RoutesPage } from '../routes/routes';
import { PurchasesPage } from '../purchases/purchases';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NearbyPage;
  tab2Root = CameraPage;
  tab3Root = RoutesPage;
  tab4Root = PurchasesPage;

  constructor() {

  }
}
