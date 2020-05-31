import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EmployeeCategoriesService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/employee-categories', {
      query: {
        orderByChild : 'name'
      }
    });
  }

}
