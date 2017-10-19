import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-purchases',
  templateUrl: 'purchases.html'
})
export class PurchasesPage {
  purchases = [
    {
      name: "Restauração",
      img: "https://nit.pt/wp-content/uploads/2017/04/19313706_bgoki-754x394.jpeg"
    },
    {
      name: "Hotelaria",
      img: "https://www.the-yeatman-hotel.com/fotos/imagens_ambiente/bacchus_suite_banner_166957471958af2f9193d8e.jpg"
    },
    {
      name: "Artesanato",
      img: "http://4.bp.blogspot.com/_zo2bfx7IfW8/S9mDW2q1zaI/AAAAAAAAJY8/31_Cs2BQa8I/s1600/IMG_3149.JPG"
    },
    {
      name: "Desportos",
      img: "http://cdn.olhares.pt/client/files/foto/big/239/2393013.jpg"
    }
  ];
  constructor(public navCtrl: NavController) {

  }

}
