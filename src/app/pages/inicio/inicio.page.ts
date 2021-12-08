import { ApiserviceService } from 'src/app/services/apiservice.service';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { OpcionUsuarioComponent } from 'src/app/components/opcion-usuario/opcion-usuario.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { MensajeComponent } from 'src/app/components/mensaje/mensaje.component';
import { CredencialComponent } from 'src/app/components/credencial/credencial.component';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreTitle: string ;
  usuario: any;

  constructor(private menu: MenuController, private router: Router, private activeRoute: ActivatedRoute,
    private alertController: AlertController,
    private modalController: ModalController,
    private firebase: FirebaseService,
    private api: ApiserviceService) {
    this.nombreTitle = 'Inicio';
    this.activeRoute.queryParams.subscribe(params => {
      // Utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){ // Validamos si el extras de la navegacion tiene parametros.

        console.log("Inicio");
        console.log(this.router.getCurrentNavigation().extras.state.usuario); // Muestro el parametro obtenido por consola
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;


      }
    });
   
   }

  ngOnInit() {
    
  }

  
  ionViewWillEnter(){
    console.log(this.usuario);
    this.presentAlert(`Bienvenido ${this.usuario.usuario}`);
    console.log(this.api.verificarSesion())
    console.log('Page inicio')
    
  }


   // present alert

   async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: msg,
      backdropDismiss: true
    });

    await alert.present();
  };

  async presentModal() {
    const modal = await this.modalController.create({
      component: OpcionUsuarioComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  };

  async presentMensaje() {
    const modal = await this.modalController.create({
      component: MensajeComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  };

  async presentCredencial() {
    const modal = await this.modalController.create({
      component: CredencialComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }; 


}
