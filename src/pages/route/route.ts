import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoutePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {
  name = "";
  img = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.img = navParams.get("img");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoutePage');
  }

}
