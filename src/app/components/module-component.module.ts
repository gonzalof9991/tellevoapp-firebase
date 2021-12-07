import { ToolbarsalirComponent } from './toolbarsalir/toolbarsalir.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { MenuComponent } from './menu/menu.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { OpcionUsuarioComponent } from 'src/app/components/opcion-usuario/opcion-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalviajeComponent } from './modalviaje/modalviaje.component';
import { MapaComponent } from './mapa/mapa.component';
import { CredencialComponent } from './credencial/credencial.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    OpcionUsuarioComponent,
    GeolocationComponent,
    MenuComponent,
    ModalviajeComponent,
    MapaComponent,
    MensajeComponent,
    CredencialComponent,
    ToolbarsalirComponent,
    ToolbarComponent
  ],
  exports:[
    FooterComponent,
    OpcionUsuarioComponent,
    GeolocationComponent,
    MenuComponent,
    ModalviajeComponent,
    MapaComponent,
    MensajeComponent,
    CredencialComponent,
    ToolbarsalirComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ModuleComponentModule { }
