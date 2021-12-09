import { ApiserviceService } from 'src/app/services/apiservice.service';
import { MensajeFirebaseService } from './../../services/mensaje-firebase.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Mensaje } from 'src/app/interfaces/mensaje';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent implements OnInit {
  mensajes = [];
  mensaje: any = {
    chofer: '',
    destino: '',
    tarifa: '',
    horaSalida: ''
  }
  usuario: any;
  constructor( private modalCtrl: ModalController,private mensajeFirebase: MensajeFirebaseService, private api: ApiserviceService) {
    
    this.usuario = this.api.mostrarDatos();
    this.mensajeFirebase.obtenerMensajes().subscribe(res => {
      this.mensajes = res;
      
      this.verMensajes(res);
      
    
    })
    
   }
  nombreTitle: any = 'Mensaje';
 
  ngOnInit() {}
  
  async close(){
    await this.modalCtrl.dismiss();
  }

  verMensajes(mensajes:any){
    
    this.mensajes.forEach(element => {
      console.log(element.chofer);
      console.log(this.usuario.usuario);
      if (element.chofer === this.usuario.usuario) {
          this.mensaje.chofer = element.chofer;
          this.mensaje.destino = element.destino;
          this.mensaje.tarifa = element.tarifa;
          this.mensaje.horaSalida = element.horaSalida;
          

      }
      if (element.pasajero === this.usuario.usuario) {
        this.mensaje.chofer = element.chofer;
        this.mensaje.destino = element.destino;
        this.mensaje.tarifa = element.tarifa;
        this.mensaje.horaSalida = element.horaSalida;

    }
    });
  }

  viajeEnCurso(){
    let viaje = this.mensajeFirebase.verViaje();
    let mensajes = this.mensajes.length;
    if (viaje && mensajes >= 1 ) {
      return true;
    }
    else{
      return false;
    }
  }

}
