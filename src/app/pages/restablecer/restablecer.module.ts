import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecerPageRoutingModule } from './restablecer-routing.module';

import { RestablecerPage } from './restablecer.page';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ModuleComponentModule } from 'src/app/components/module-component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecerPageRoutingModule,
    ModuleComponentModule
    
  ],
  declarations: [
    RestablecerPage,
  ]
})
export class RestablecerPageModule {}
