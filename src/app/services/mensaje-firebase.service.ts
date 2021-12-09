import { Mensaje } from './../interfaces/mensaje';
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeFirebaseService {

  constructor(private firestore: Firestore) { }

  obtenerMensajes(): Observable<Mensaje []>{
    const notesRef = collection(this.firestore, 'Mensajes');
    return collectionData(notesRef, {idField: 'id'}) as Observable<Mensaje []> ;
  }

  obtenerMensajeById(id): Observable<Mensaje>{
    const noteDocRef = doc(this.firestore, `Mensajes/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as  Observable<Mensaje>;
  }

  agregarMensaje(mensaje: Mensaje){
    const notesRef = collection(this.firestore, 'Mensajes');
    return addDoc(notesRef,mensaje);
  }

  borrarMensaje(mensaje: Mensaje){
    const noteDocRef = doc(this.firestore, `Mensajes/${mensaje.id}`);
    return deleteDoc(noteDocRef);
  }

  actualizarMensaje(mensaje: Mensaje){
    const noteDocRef = doc(this.firestore, `Mensajes/${mensaje.id}`);
    return updateDoc(noteDocRef, {chofer: mensaje.chofer, destino: mensaje.destino, tarifa: mensaje.tarifa,
    horaSalida: mensaje.horaSalida, pasajero: mensaje.pasajero});
  } 
}
