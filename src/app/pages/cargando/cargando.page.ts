/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.page.html',
  styleUrls: ['./cargando.page.scss'],
})
export class CargandoPage {

  constructor(public router: Router) {
  }

  ionViewWillEnter(){
    console.log("Cargando");
    const avanzar = () => {
      const navigationExtras: NavigationExtras = {
        // al estado le asign un obj con clave y valor
      };

      // Navegar con el api enrutador
      // Se agrega el navigation extras para sacar informacion para otra pagina
      this.router.navigate(['/login'],navigationExtras);

    };

    setTimeout(avanzar, 8000); // Despues de 8 seg se ejecuta la funcion Avanzar

  }
  



  

    

}

