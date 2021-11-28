import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(public modalCtrl: ModalController , public router: Router) {}

  ngOnInit() {}

  cerrarModal(){
    this.close();
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  cerrarSesion(){
    this.close();
    const navigationExtras: NavigationExtras = {
      // al estado le asign un obj con clave y valor
    };

    // Navegar con el api enrutador
    // Se agrega el navigation extras para sacar informacion para otra pagina
    this.router.navigate(['/cargando'],navigationExtras);

  }


}
