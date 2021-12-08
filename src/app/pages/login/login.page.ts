import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, AnimationController, ToastController } from '@ionic/angular';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  usuario: any  = {
    usuario: '',
    pass: ''
  };
  nombreTitle: any = 'Login';
  constructor(public toastController: ToastController,
              private animationCtrl: AnimationController,
              public alertController: AlertController,
              private router: Router,
              private api: ApiserviceService) 
              {}

  // Selector
  @ViewChild('div',{read: ElementRef, static: true}) div: ElementRef;

  limpiar(){
    // Limpiar todos los datos
    // recorro el Object entries y obtengo su clave y valor para luego limpiarlos
    for (const [key,value] of Object.entries(this.usuario)) {
          Object.defineProperty(this.usuario,key,{value:''});
    }
    this.moverDiv('1'); // animacion para que al limpiar el div completo se mueva de arriba a abajo

  }

  flag: boolean;

  validar(){

    this.flag = true;
    // Limpiar todos los datos
    // recorro el Object entries y obtengo su clave y valor para luego limpiarlos

    if(this.usuario.usuario.length === 0){
      this.flag = false;
    }
    if(this.usuario.pass.length === 0){
      this.flag = false;
    }

    this.moverDiv('2');
    if(this.flag){
      this.getUsuarios();

    }
    else{
      this.presentAlert('Campos vacios');
    }




  }

 getUsuarios() {
    this.api.getUsers().subscribe((data) => {
      let objeto = data;
      console.log(data);
      for (const key in objeto) {
        if (Object.prototype.hasOwnProperty.call(objeto, key)) {
          const arreglo = objeto[key];
          //console.log(arreglo.length);
          this.verificarUsuario(arreglo);
          
          
        }
      }

    
    });
  } 



  verificarUsuario(user: any){
    const arreglo = user;
    // Bandera para ver si el usuario o contraseña es incorrecto
    let flag = true;
    for (let i = 0; i < arreglo.length; i++) {
        
      // Si el usuario y el pass existe en la api
        if(this.usuario.usuario === arreglo[i].usuario && this.usuario.pass ===arreglo[i].password  ){
          this.avanzar();
          this.api.usuarioLogueado('1',this.usuario);
          flag = true;
          this.api.guardarDatos(arreglo[i].nombre,arreglo[i].apellido,arreglo[i].usuario,arreglo[i].email,
            arreglo[i].sede,
            arreglo[i].carrera,
            arreglo[i].rut,
            arreglo[i].tipoUsuario,
            arreglo[i].password,
            arreglo[i].auto)
          break;  // Se rompe el ciclo for 
        }
        // Si el usuario no existe o el pass es invalido en la api
        if(this.usuario.usuario !== arreglo[i].usuario || this.usuario.pass !== arreglo[i].password){
          flag = false;
        }
      
    }
    if(flag === false){
      this.presentAlert('El nombre de usuario o contraseña son incorrectas');
    }
  }

  // Avanzar a pagina inicio
  avanzar(){
    const navigationExtras: NavigationExtras = {
      state:{usuario: this.usuario}
    };

    this.router.navigate(['/inicio'],navigationExtras);
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

   async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  moverDiv(x: string){
    const movery = this.animationCtrl.create()
    .addElement(this.div.nativeElement)
    .duration(500) // 0.5 seg
    .keyframes([
      { offset: 0, transform: 'translateY(0px)', opacity: '1' },
      { offset: 0.5, transform: 'translateY(100px)', opacity: '0.2' },
      { offset: 1, transform: 'translateY(0px)', opacity: '1' }

    ]);

    const moverx = this.animationCtrl.create()
    .addElement(this.div.nativeElement)
    .duration(200) // 0.5 seg
    .keyframes([
      { offset: 0, transform: 'translateX(0px)', opacity: '1' },
      { offset: 0.2, transform: 'translateX(5px)', opacity: '0.8' },
      { offset: 0.6, transform: 'translateX(0px)', opacity: '1' },
      { offset: 0.8, transform: 'translateX(-5px)', opacity: '0.8' },
      { offset: 1, transform: 'translateX(0px)', opacity: '1' }

    ]);

    if(x === '1'){
      movery.play();
    }
    if(x === '2'){
      moverx.play();
    }


  }

}
