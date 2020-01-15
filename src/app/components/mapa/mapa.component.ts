import { Component, OnInit } from '@angular/core';
import { Market } from '../../models/market.model';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Market[] = [];

  title = 'My first AGN Project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() {

    const market = new Market(-12.152221, -12.152221, 'Casa Surco', 'Mi casa');
    this.marcadores.push(market);

    // console.log(this.marcadores);

  }

  ngOnInit() {
  }


  addMarket(event) {

    const { lat } = event.coords;
    const { lng } = event.coords;

    const market = new Market(lat, lng);

    this.marcadores.push(market);

    console.log(this.marcadores);


  }

}
