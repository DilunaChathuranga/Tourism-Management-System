import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OfferCategoryService {

  constructor(private db: AngularFireDatabase) { }

  getEqui() {
    return this.db.list('/equipment-categories', {
      query: {
        orderByChild : 'name'
      }
    });
  }
}
