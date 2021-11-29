

import { Router, NavigationExtras } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController, AnimationController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-opcion-usuario',
  templateUrl: './opcion-usuario.component.html',
  styleUrls: ['./opcion-usuario.component.scss'],
})
export class OpcionUsuarioComponent implements OnInit {

  viajes = [];
  constructor(
    public modalCtrl: ModalController , 
    public router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController,
    private firebase: FirebaseService
    ) {
      this.firebase.obtenerViajes().subscribe(res => {
        console.log(res);
        this.viajes = res;
      
      })
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('opcion')opcion: ElementRef;

  ngOnInit() {}

  ngAfterViewInit() {
  }

  
  
  async close(){
    await this.modalCtrl.dismiss();
  }

  
  cerrarModal(){
    this.close();
  }

}
