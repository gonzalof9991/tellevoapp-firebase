import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

declare let google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  map: any;
  
  
  constructor() { }

  ngOnInit() {
    this.printCurrentPosition();
    this.iniciarMap();
    
    
  }


  iniciarMap(){
    // crea un elemento HTML
   const mapEle: HTMLElement = document.getElementById('mapap');
    // se crea un variable con una ubicacion fija
   const centerMap = { lat: -33.03371819140171, lng: -71.53305119744141};
   // creacion de mapa
   this.map = new google.maps.Map(mapEle, {

     center: centerMap,
     zoom: 12,
     disableDefaultUI: true, // Quitar controles predeterminados de google maps
    
   });

   


   
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Latitud:', coordinates.coords.latitude);
    console.log('Longitud:', coordinates.coords.longitude);
    new google.maps.Marker({
      position: {lat: coordinates.coords.latitude, lng: coordinates.coords.longitude },
      map: this.map,
      title: "Estoy aqui!",
    });
    
  };

}
