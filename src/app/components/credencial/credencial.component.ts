import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-credencial',
  templateUrl: './credencial.component.html',
  styleUrls: ['./credencial.component.scss'],
})
export class CredencialComponent implements OnInit {

  nombreTitle: any = 'Credencial';
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalCtrl.dismiss();
  }

}
