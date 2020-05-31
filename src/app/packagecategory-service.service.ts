import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PackagecategoryServiceService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/package-category', {
      query: {
        orderByChild : 'name'
      }
    });
  }
}
