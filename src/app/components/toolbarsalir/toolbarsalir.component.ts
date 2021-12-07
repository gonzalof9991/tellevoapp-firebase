import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-toolbarsalir',
  templateUrl: './toolbarsalir.component.html',
  styleUrls: ['./toolbarsalir.component.scss'],
})
export class ToolbarsalirComponent implements OnInit {
  @Input() title: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  
  async close(){
    await this.modalCtrl.dismiss();
  }

}
