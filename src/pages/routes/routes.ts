import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'routes.html'
})
export class RoutesPage {
  routes = [
    {
      name: "Arquitetura",
      img: "http://www.movenoticias.com/wp-content/uploads/2016/07/terminal-cruzeiros-leixoes-640x402.jpg"
    },
    {
      name: "Rota Vinícola",
      img: "http://clubedevinhos.com/files/artigos/copos-vinho-do-porto.jpg"
    },
    {
      name: "Arte Urbana",
      img: "https://jpn.up.pt/wp-content/uploads/2017/04/dheo.jpg"
    },
    {
      name: "Espaços Verdes",
      img: "http://www.cm-porto.pt/assets/misc/img/AMBIENTE/Jardins%20e%20parques/parques/PARQUE_DA_CIDADE_30.jpg"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
