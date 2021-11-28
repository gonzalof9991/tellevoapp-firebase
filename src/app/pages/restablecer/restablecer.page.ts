/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */

import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  nombreTitle: string;
  usuario: string;


  constructor(public alertController: AlertController,
              public router: Router,
              
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.nombreTitle = 'Restablecer';
  }

  public validar(){
    // Verifica si las variables estan undefine
    let flag: boolean = true;

    if(typeof this.usuario === 'undefined'){
      this.presentAlert('Usuario vacio');
      flag = false;

    }else{

      if (this.usuario.length === 0){
        flag = false;
        this.presentAlert('Campo Vacio: Usuario');
      }
    }

    if(flag){
      this.navegar('login');
    }

  }

  // Creacion de async alert
  async presentAlert(msg: string){
    const alert = await this.alertController.create({
      cssClass: 'ion-text-center',
      header: msg,
      animated: true,
      translucent:true,
      buttons: [
        {
          text: 'Intentar de nuevo',
          role: 'cancel',
          cssClass: 'large primary ion-padding-horizontal',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },

        }
      ]

    });

    alert.present();
  }


  navegar(page: string){
    // Declaro e instancio un elemento del tipo NavigationExtras
    const navigationExtras: NavigationExtras = {

    };

    // Navegar con el api enrutador
    // Se agrega el navigation extras para sacar informacion para otra pagina
    this.router.navigate(['/'+page+''],navigationExtras);  // redirecciona a la Page pagina 2
  }

}
