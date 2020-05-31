import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PaymentPackageService {

  constructor(private db: AngularFireDatabase) { }

  getPackages() { 
    return this.db.list('/packages');

  }
  create(pkg){
    return this.db.list('/packages-offer').push(pkg);
  }

}
