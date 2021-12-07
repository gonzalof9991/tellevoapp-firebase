import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Viaje } from './../../interfaces/viaje';

import { Router, NavigationExtras } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController, AnimationController, ToastController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalviajeComponent } from '../modalviaje/modalviaje.component';

@Component({
  selector: 'app-opcion-usuario',
  templateUrl: './opcion-usuario.component.html',
  styleUrls: ['./opcion-usuario.component.scss'],
})
export class OpcionUsuarioComponent implements OnInit {

  nombreTitle: any = 'Viajes';
  viajes = [];
  viaje: any = {
     chofer: '',
     patente: '',
     color: '',
     modelo: '',
     inicio: 'Duoc UC',
     destino: '',
     tarifa: '',
     horaSalida: '',
     capacidad: '',
     pasajero: '',
  }
  usuario: any;
  constructor(
    public modalCtrl: ModalController , 
    public router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    private firebase: FirebaseService,
    private api: ApiserviceService,
    private toastCtrl: ToastController
    
    ) {
      this.firebase.obtenerViajes().subscribe(res => {
        console.log(res);
        this.viajes = res;
      
      })
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('opcion')opcion: ElementRef;

  ngOnInit() {}

  

  ionViewWillEnter(){
    this.usuario = this.api.mostrarDatos();
    this.crearFecha();
    this.tipoUsuario();
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  
  async cerrarModal(){
    this.close();
  }

  tipoUsuario(){
    let tipoU = this.usuario.tipoUsuario;
    if (tipoU === 'Chofer') {
      console.log('Chofer')
        return true;
    }

    else if (tipoU === 'Pasajero') {
      console.log('Pasajero');
      return false;
  }

    
  }

  flag: boolean = false; // Campos vacios
  flag2: boolean = false; // Tarifa
  flag3: boolean = false; // Capacidad
  fecha: any;
  validar(){
    if (this.viaje.destino !== '' && this.viaje.tarifa !== '' && this.viaje.capacidad !== '' 
    && this.viaje.patente !== '' && this.viaje.modelo !== ''  && this.viaje.color !== '' ) {
      
       this.flag = true;
    }
    else{
      this.flag = false;
    }

  }

  validarTarifa(){
    let tarifa = Number(this.viaje.tarifa);
    
    if (tarifa <= 1500  && tarifa >=500) {
        this.flag2 = true;
    }
    else{
      this.flag2 = false;
      this.mensajeToast('La tarifa debe ser mayor a $500 y menor o igual a $1500');
    }
  }

  validarCapacidad(){
    let capacidad = Number(this.viaje.capacidad);
    if (capacidad <= 4  && capacidad >=1) {
      this.flag3 = true;
  }
    else{
      this.flag3 = false;
      this.mensajeToast('La capacidad debe ser mayor a 0 y menor o igual a 4');
    }

  }

  crearViaje(){
    this.validar();
    this.validarTarifa();
    this.validarCapacidad();
    if(this.flag){
      if (this.flag2) {
        if (this.flag3) {
          this.fecha = this.crearFecha();
          
          this.firebase.agregarViaje({
          chofer: this.usuario.usuario,
          patente: this.viaje.patente,
          color: this.viaje.color,
          modelo: this.viaje.modelo,
          inicio: this.viaje.inicio, 
          destino: this.viaje.destino,
          tarifa: this.viaje.tarifa, 
          horaSalida: this.fecha, 
          capacidad: this.viaje.capacidad,
          pasajero: '',
          email:this.usuario.email
        }) ;
          
          this.mensajeToast('Viaje creado exitosamente.');   
        }
          
      }
      
    }
    else{
      this.mensajeToast('Campos vacios');
    }
    
  }

  crearFecha(){
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);
    return hoy.toDateString();

  }

  limpiar(){
    // Limpiar todos los datos
    // recorro el Object entries y obtengo su clave y valor para luego limpiarlos
    for (const [key,value] of Object.entries(this.viaje)) {
          Object.defineProperty(this.viaje,key,{value:''});
    }
    
    this.viaje.inicio = 'Duoc UC';

  }


  async mensajeToast(msg: any){
    const toast = await this.toastCtrl.create({
      message:msg,
      duration:2000,
      position: 'top'
    })
    toast.present();
  }

  
}
