import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargandoPageRoutingModule } from './cargando-routing.module';

import { CargandoPage } from './cargando.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ModuleComponentModule } from 'src/app/components/module-component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargandoPageRoutingModule,
    ModuleComponentModule
  ],
  declarations: [
    CargandoPage,
  ]
})
export class CargandoPageModule {}
