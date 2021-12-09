import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.page.html',
  styleUrls: ['./page404.page.scss'],
})
export class Page404Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  volver(){
    const navigationExtras: NavigationExtras = {
      // al estado le asign un obj con clave y valor
    };

    // Navegar con el api enrutador
    // Se agrega el navigation extras para sacar informacion para otra pagina
    this.router.navigate(['/cargando'],navigationExtras);

  }

}
