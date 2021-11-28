import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  pass: string;
  nombreTitle: string;

  constructor(
    public router: Router,
    public alertCtrl: AlertController,
    private animationCtrl: AnimationController,
  ) { }

  ngOnInit() {
  }

  // Animacion :
  // ViewChild es un decorador que permite obtener las instancias de elementos nativos
  @ViewChild('card', {static: false}) card: ElementRef;


  ngAfterViewInit() {
     /* const cardAnimation: Animation = this.animationCtrl.create()
    .addElement(this.card.nativeElement)
    .duration(4000)
    .fromTo('transform','translateY(100px)','translateY(-50px)')
    .fromTo('opacity','0','1');
    

    cardAnimation.play(); */

    this.nombreTitle = 'Login';

  }
  segmentChanged(event: any){
    const ruta = event.detail.value;
    this.router.navigate(['login/'+ ruta]);

  };

}
