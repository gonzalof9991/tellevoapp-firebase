
import { Component, Input, OnInit, Output } from '@angular/core';
import { Geolocation , PositionOptions} from '@capacitor/geolocation';
import { ToastController, AlertController } from '@ionic/angular';


declare let google; // Declarar variable google , ya que se esta llamando desde un SDK google maps ubicado en index.html en el script de API

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent  {
  position: any = {
    lat:null,
    lng:null
  };
  map = null;
  btn: any;

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  // Duoc
  origin ={ lat: -33.03371819140171, lng: -71.53305119744141};
  // destino
  destination = { lat: -32.99958028909227, lng: -71.50834383497165};
  
  constructor(public toastController: ToastController,
    private alertController: AlertController) {
  }

  ngOnInit() {
    this.cargarMapa();
  }

  async posicionUsuario() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.position.lat = coordinates.coords.latitude;
    this.position.lng = coordinates.coords.longitude;
  }
 // Valida el tipo de usuario que inicio sesion
  // Obtener usuarios en API usuarios

  cargarMapa() {
   // crea un elemento HTML
   const mapEle: HTMLElement = document.getElementById('map');
   const indicatorsEle: HTMLElement = document.getElementById('indicators');
   // se crea un variable con una ubicacion fija
   const centerMap = { lat: -33.03371819140171, lng: -71.53305119744141};

   // creacion de mapa
   this.map = new google.maps.Map(mapEle, {

     center: centerMap,
     zoom: 12,
     disableDefaultUI: true, // Quitar controles predeterminados de google maps
    


   });
   // Direccion de origen y destino
   this.directionsDisplay.setMap(this.map);
   // Panel de direccion
   this.directionsDisplay.setPanel(indicatorsEle);
   this.calculateRoute();
   /* google.maps.event.addListenerOnce(this.map, 'idle', () => {
     mapEle.classList.add('show-map');
     */

   /* const marcador = new google.maps.Marker({
    position:  { lat: -33.03371819140171, lng: -71.53305119744141}, // Posicion en el mapa
    map: this.map, // Mapa creado anteriormente
    title: 'Duoc UC ', // Texto
    icon: '../assets/images/duoc.png' // Icono
   }); */
  
};

private calculateRoute() {
  this.directionsService.route({
    origin: this.origin,
    destination: this.destination,
    travelMode: google.maps.TravelMode.DRIVING,
  }, (response, status)  => {
    if (status === google.maps.DirectionsStatus.OK) {
      this.directionsDisplay.setDirections(response);
    } else {
      alert('Could not display directions due to: ' + status);
    }
  });
  }

  

 // present alert

 async presentAlert(msg: string) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: msg,
    backdropDismiss: true
  });

  await alert.present();
}


mostrar(){
  console.log(this.btn);
}









}
