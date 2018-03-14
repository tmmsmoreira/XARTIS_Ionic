import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  name = "";
  coords = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public geolocation: Geolocation,
    private launchNavigator: LaunchNavigator
  ) { }

  ionViewDidLoad() {
    this.name = this.navParams.get("name");
    this.coords = this.navParams.get("coords");
    this.loadMap();
  }

  ionViewWillEnter() {
    this.name = this.navParams.get("name");
    this.coords = this.navParams.get("coords");
    this.loadMap();
  }

  loadMap() {
    let latLng = new google.maps.LatLng(this.coords.lat, this.coords.long);

    if (!this.map) {
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    } else {
      this.map.setCenter(latLng);
    }

    let marker = new google.maps.Marker({
      position: latLng,
      map: this.map
    });

    /*let options: LaunchNavigatorOptions = {
      start: 'London, ON',
      app: LaunchNavigator.APPS.GOOGLE_MAPS
    };*/

    marker.addListener('click', () => {
      this.launchNavigator.navigate([this.coords.lat, this.coords.lon]/*, options*/)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
    });
  }

}
