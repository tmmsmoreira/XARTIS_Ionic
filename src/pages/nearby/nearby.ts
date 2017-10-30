import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
//import { NavController } from 'ionic-angular';

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
      img: "https://drive.google.com/uc?export=jpg&id=0ByynpcaAWr_EbWhIS05HZ2VaQlE"
    },
    {
      name: "Sé do Porto",
      distance: "30m",
      img: "https://www.dinheirovivo.pt/wp-content/uploads/2017/01/porto-se-cathedral-view.jpg"
    },
    {
      name: "Casa da Música",
      distance: "30m",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Casamusicaexterior.jpg/1200px-Casamusicaexterior.jpg"
    }
  ];

  constructor() {

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

