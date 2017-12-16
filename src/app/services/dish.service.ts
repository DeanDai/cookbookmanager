import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Dish } from '../models/Dish';

@Injectable()
export class DishService {
  dishesCollection: AngularFirestoreCollection<Dish>;
  dishes: Observable<Dish[]>;
  dishDoc: AngularFirestoreDocument<Dish>;

  constructor(public cbm: AngularFirestore) {
    this.dishesCollection = this.cbm.collection('dishes', ref => ref.orderBy('dish_name', 'asc'));
    // this.dishes = this.cbm.collection('dishes').valueChanges();
    // snapshotchanges will provide 'id' field
    this.dishes = this.dishesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Dish;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getDishes () {
    return this.dishes;
  }

  addDish (dish: Dish) {
    this.dishesCollection.add(dish);
  }

  deleteDish (dish: Dish) {
    this.dishDoc = this.cbm.doc(`dishes/${dish.id}`);
    this.dishDoc.delete();
  }

  updateDish (dish: Dish) {
    this.dishDoc = this.cbm.doc(`dishes/${dish.id}`);
    this.dishDoc.update(dish);
  }

}
