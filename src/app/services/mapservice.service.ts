import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  constructor() { }
  ubicacion: any;
  guardarU(u: any){
    this.ubicacion = u;
  }

  mostrarU(){
    return this.ubicacion;
  }
}
