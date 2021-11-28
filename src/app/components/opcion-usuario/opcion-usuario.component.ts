
import { Viaje } from './../../interfaces/interfaces';
import { Router, NavigationExtras } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController, AnimationController } from '@ionic/angular';
import { modalController } from '@ionic/core';

@Component({
  selector: 'app-opcion-usuario',
  templateUrl: './opcion-usuario.component.html',
  styleUrls: ['./opcion-usuario.component.scss'],
})
export class OpcionUsuarioComponent implements OnInit {


  usuario: any = {
    direccion: '',
    tipoPago:'',
    inicio:'',
    hasta:'',
    tarifa:''
  };
  viaje: any ={
    destino: '',
    precio:''
  }
  div: string = "<ion-card><h1>Hola mundo</h1></ion-card>" ;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  constructor(public modalCtrl: ModalController , public router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    ) {
      
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('opcion')opcion: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
    

  // this.opcion.nativeElement.insertAdjacentHTML('beforeend',chofer);
  }

  
  
  async close(){
    await this.modalCtrl.dismiss();
  }

  
  cerrarModal(){
    this.close();
  }

  
  

  limpiar(): void{

    // Limpiar todos los datos
    // recorro el Object entries y obtengo su clave y valor para luego limpiarlos
    for (const [key,value] of Object.entries(this.usuario)) {
          Object.defineProperty(this.usuario , key,{value:''});
    }
    // this.moverDiv('1'); // animacion para que al limpiar el div completo se mueva de arriba a abajo

  }

  /* moverDiv(x: string): void{
    const movery = this.animationCtrl.create()
    .addElement(this.div.nativeElement)
    .duration(500) // 0.5 seg
    .keyframes([
      { offset: 0, transform: 'translateY(0px)', opacity: '1' },
      { offset: 0.5, transform: 'translateY(100px)', opacity: '0.2' },
      { offset: 1, transform: 'translateY(0px)', opacity: '1' }

    ]);


    const moverx = this.animationCtrl.create()
    .addElement(this.div.nativeElement)
    .duration(500) // 0.5 seg
    .keyframes([
      { offset: 0, transform: 'translateX(0px)', opacity: '1' },
      { offset: 0.2, transform: 'translateX(5px)', opacity: '0.8' },
      { offset: 0.6, transform: 'translateX(0px)', opacity: '1' },
      { offset: 0.8, transform: 'translateX(-5px)', opacity: '0.8' },
      { offset: 1, transform: 'translateX(0px)', opacity: '1' }

    ]);

    if(x === '1'){
      movery.play();
    }
    if(x === '2'){
      moverx.play();
    }


  } */


  async mensaje(msg: string){

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: msg,
      backdropDismiss: true
    });

    await alert.present();

 }



}
