import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
})
export class CityPage {
  name = "";
  img = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get("name");
    this.img = navParams.get("img");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPage');
  }

}
