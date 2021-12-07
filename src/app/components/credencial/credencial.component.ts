import { ApiserviceService } from 'src/app/services/apiservice.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.scss'],
})
export class CredencialComponent implements OnInit {

  nombreTitle: any = 'Credencial';
  constructor(private modalCtrl: ModalController, private api: ApiserviceService) { }
  usuario: any;
  ngOnInit() {
    console.log(this.api.mostrarDatos());
    this.usuario = this.api.mostrarDatos();
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

}
