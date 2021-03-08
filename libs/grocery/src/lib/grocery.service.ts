import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Grocery } from './grocery.model';

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

  addItem(item: Grocery) {
    this.fs.collection('growcery').add(item);
  }
}
