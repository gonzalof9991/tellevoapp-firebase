import { ModalComponent } from './../modal/modal.component';
import { NavigationExtras, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  componentes: Observable<Componente[]>; //Creando observable

  @Input() title: string;

  constructor(private router: Router,
              private modalCtrl: ModalController,
             ) { }

  ngOnInit() {
    //Agregando a 'componentes' el JSON local para el menú como arreglo de objetos
    // this.componentes = this.dataService.getMenuOpts();
  }

  cerrarSesion(){
    const navigationExtras: NavigationExtras = {
      // al estado le asign un obj con clave y valor
    };

    // Navegar con el api enrutador
    // Se agrega el navigation extras para sacar informacion para otra pagina
    this.router.navigate(['/cargando'],navigationExtras);

  }



}
