import { Viaje } from './../../interfaces/viaje';
import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modalviaje',
  templateUrl: './modalviaje.component.html',
  styleUrls: ['./modalviaje.component.scss'],
})
export class ModalviajeComponent implements OnInit {

  viaje: Viaje = null;
  @Input() id: string;
  constructor(
    private firebase: FirebaseService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.firebase.obtenerViajeById(this.id).subscribe(res => {
      this.viaje = res;
  })
  }
  cerrar() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
