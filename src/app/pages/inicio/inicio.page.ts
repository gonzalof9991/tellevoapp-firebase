import { Usuario } from './../../interfaces/interfaces';
import { NavigationExtras, Router ,ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { OpcionUsuarioComponent } from 'src/app/components/opcion-usuario/opcion-usuario.component';



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
    private modalController: ModalController) {
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
    const b = () => { this.presentAlert(`Bienvenido ${this.usuario.usuario}`);};
    setTimeout(b,100);
    
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


}
