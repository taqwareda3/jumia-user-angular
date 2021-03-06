import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { catchError, Observable } from 'rxjs';
import IProduct from '../ViewModels/Iproduct';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private db: AngularFirestore) {}
  getAllData() {
    return this.db.collection('Products').snapshotChanges()
  }
  getProductById(productId:number)
  {
   return this.db.collection('Products').doc(`${productId}`).valueChanges();

  }

}
