import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}
  
  async close(){
    await this.modalCtrl.dismiss();
  }

}
