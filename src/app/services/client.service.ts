import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  //clientCollection : AngularFirestoreCollection;
  constructor(private afs :AngularFirestore) { 
    //this.clientCollection = afs.collection('clients');

  }
  getAll(){
    return this.afs.collection('clients').valueChanges();
  }
}
