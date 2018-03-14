import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { MapPage } from '../map/map';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})

export class NearbyPage {
  @ViewChild('slideArquitect') slideArquitect: Slides
  @ViewChild('slideRoutes') slideRoutes: Slides

  posts = [];
  arquitecture = [
    {
      name: "Estação de S. Bento",
      distance: "30m",
      img: "https://drive.google.com/uc?export=jpg&id=0ByynpcaAWr_EbWhIS05HZ2VaQlE",
      coords: {
        lat: 41.14283,
        long: -8.6127193
      }
    },
    {
      name: "Sé do Porto",
      distance: "30m",
      img: "https://www.dinheirovivo.pt/wp-content/uploads/2017/01/porto-se-cathedral-view.jpg",
      coords: {
        lat: 41.1456697,
        long: -8.6133723
      }
    },
    {
      name: "Casa da Música",
      distance: "30m",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Casamusicaexterior.jpg/1200px-Casamusicaexterior.jpg",
      coords: {
        lat: 41.158885,
        long: -8.6328847
      }
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item) {
    this.navCtrl.push(MapPage, item);
  }

  ngAfterViewInit() {
    this.slideArquitect.freeMode = true;
    this.slideArquitect.width = 130;
    this.slideArquitect.height = 120;
    this.slideArquitect.spaceBetween = 10;

    this.slideRoutes.freeMode = true;
    this.slideRoutes.width = 130;
    this.slideRoutes.height = 120;
    this.slideRoutes.spaceBetween = 10;
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    /*setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.posts.push( this.obj );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);*/
  }
}

