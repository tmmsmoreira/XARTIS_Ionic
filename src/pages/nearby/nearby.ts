import { Component } from '@angular/core';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-nearby',
  templateUrl: 'nearby.html'
})

export class NearbyPage {
  posts = [];
  obj = {
    place: "Ponte D. Luís",
    distance: "6 km",
    img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
  };

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.posts.push( this.obj );
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.posts.push( this.obj );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  /*constructor(public navCtrl: NavController) {
    this.posts = [
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      },
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      },
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      },
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      },
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      },
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      },
      {
        place: "Ponte D. Luís",
        distance: "6 km",
        img: "http://www.cruzeiros-douro.pt/userfiles/image/pt/blog/factos-e-mitos-sobre-as-6-pontes-do-porto-luis.jpg"
      }
    ];
  }*/
}

