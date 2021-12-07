import { MarcarviajeComponent } from './marcarviaje/marcarviaje.component';
import { MenuComponent } from './menu/menu.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { ModalComponent } from './modal/modal.component';
import { OpcionUsuarioComponent } from 'src/app/components/opcion-usuario/opcion-usuario.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IniciarSesionComponent } from 'src/app/components/iniciar-sesion/iniciar-sesion.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalviajeComponent } from './modalviaje/modalviaje.component';
import { MapaComponent } from './mapa/mapa.component';



@NgModule({
  declarations: [
    FooterComponent,
    IniciarSesionComponent,
    ToolbarComponent,
    OpcionUsuarioComponent,
    ModalComponent,
    GeolocationComponent,
    MenuComponent,
    ModalviajeComponent,
    MarcarviajeComponent,
    MapaComponent
  ],
  exports:[
    FooterComponent,
    IniciarSesionComponent,
    ToolbarComponent,
    OpcionUsuarioComponent,
    ModalComponent,
    GeolocationComponent,
    MenuComponent,
    ModalviajeComponent,
    MarcarviajeComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ModuleComponentModule { }
