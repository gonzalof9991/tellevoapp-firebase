import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MapserviceService } from 'src/app/services/mapservice.service';

@Component({
  selector: 'app-marcarviaje',
  templateUrl: './marcarviaje.component.html',
  styleUrls: ['./marcarviaje.component.scss'],
})
export class MarcarviajeComponent implements OnInit {
  ubicacion: any;
  nombreTitle: any = 'Ubicacion';
  constructor(private alertCtrl: AlertController, private mapService: MapserviceService, private modalCtrl: ModalController) {
    
    
   }

  ngOnInit() {
    this.iniciarMapa();
  }

  // Funcion general

  iniciarMapa(){
    // Variables
    let map: google.maps.Map;
    let marker: google.maps.Marker;
    let geocoder: google.maps.Geocoder;
    let responseDiv: HTMLDivElement;
    let response: HTMLPreElement;
    

    function initMap(): void {
      map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: { lat: -33.03371819140171, lng: -71.53305119744141},
        mapTypeControl: false,
      });
      geocoder = new google.maps.Geocoder();
    
      const inputText = document.createElement("input");
      inputText.type = "text";
      inputText.placeholder = "Ingresa la ubicacion";
    
      const submitButton = document.createElement("input");
    
      submitButton.type = "button";
      submitButton.value = "Buscar";
      submitButton.classList.add("button", "bg-primary","text-light");
  
      const clearButton = document.createElement("input");
    
      clearButton.type = "button";
      clearButton.value = "Limpiar";
      clearButton.classList.add("button", "bg-secondary","text-light");
      response = document.createElement("pre");
      response.id = "response";
      response.innerText = "";
      responseDiv = document.createElement("div");
      responseDiv.id = "response-container";
      responseDiv.appendChild(response);
    
    
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton); 

      marker = new google.maps.Marker({
        map,
      });
      map.addListener("click", (e) => {
        geocode({ location: e.latLng });
        
      });
      submitButton.addEventListener("click", () =>
        geocode({ address: inputText.value })
      );
      clearButton.addEventListener("click", () => {
        clear();
      });
      clear();
  };

  // Funciones clear y geocode
  function clear() {
    marker.setMap(null);
    responseDiv.style.display = "none";
  };
  
  function geocode(request: google.maps.GeocoderRequest): void {
    clear();
  
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
  
        map.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
        responseDiv.style.display = "block";
        response.innerText = JSON.stringify(result, null, 2);
        guardarU(results[0].geometry.location);
        return results;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  };

  const guardarU = (u) =>{
    
    this.ubicacion = u;
  }

  
  initMap();

}; // Fin de funcion general


guardar(){
  this.mapService.guardarU(this.ubicacion);
  this.presentAlert('Ubicacion guardada');
}
async close(){
  await this.modalCtrl.dismiss();
}

async presentAlert(msg: string) {
  const alert = await this.alertCtrl.create({
    cssClass: 'alert-mapa',
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}

}
