import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EqCateServiceService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/equipment-categories', {
      query: {
        orderByChild : 'name'
      }
    });
  }

}
