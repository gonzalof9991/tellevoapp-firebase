import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
import { Viaje } from '../interfaces/viaje';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore) { }

  obtenerViajes(): Observable<Viaje []>{
    const notesRef = collection(this.firestore, 'Viajes');
    return collectionData(notesRef, {idField: 'id'}) as Observable<Viaje []> ;
  }

  obtenerViajeById(id): Observable<Viaje>{
    const noteDocRef = doc(this.firestore, `Viajes/${id}`);
    return docData(noteDocRef, {idField: 'id'}) as  Observable<Viaje>;
  }

  agregarViaje(viaje: Viaje){
    const notesRef = collection(this.firestore, 'Viajes');
    return addDoc(notesRef,viaje);
  }

  borrarViaje(viaje: Viaje){
    const noteDocRef = doc(this.firestore, `Viajes/${viaje.id}`);
    return deleteDoc(noteDocRef);
  }

  actualizarViaje(viaje: Viaje){
    const noteDocRef = doc(this.firestore, `Viajes/${viaje.id}`);
    return updateDoc(noteDocRef, {destino: viaje.destino, tarifa: viaje.tarifa, capacidad: viaje.capacidad, pasajeros: viaje.pasajero});
  } 
  
}
