import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CityPage } from '../city/city';

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html'
})

export class CitiesPage {
  cities = [
    {
      name: "Porto",
      img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
    },
    {
      name: "Guimarães",
      img: "https://www.celina-tours.com/images/tours/braga/braga8-slide.jpg"
    },
    {
      name: "Viana do Castelo",
      img: "https://www.caminhoportosantiago.com/wp-content/uploads/2015/08/vianacastelo.jpg"
    },
    {
      name: "Braga",
      img: "http://www.meliabraga.com/Files/Images/Melia/Braga/Paginas/Braga/03.jpg"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item) {
    this.navCtrl.push(CityPage, item);
  }
}

