import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PriceService {

  constructor(private db: AngularFireDatabase) { }

  create(price){
    return this.db.list('/pricess').push(price);

  }

  getAll() {
    return this.db.list('/pricess');

  }

  get(priceId) {
    return this.db.object('/pricess/' + priceId);

  }
  
  update(priceId, price) {
    return this.db.object('/pricess/' + priceId).update(price);
  }

  delete(priceId) {
    return this.db.object('/pricess/' + priceId).remove();

  }


}
