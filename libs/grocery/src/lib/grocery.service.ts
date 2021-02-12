import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(
    private fs: AngularFirestore
  ) { }

  getGroceryList() {
    return this.fs.collection('growcery').valueChanges();
  }
}
