import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PackageService {

  constructor(private db: AngularFireDatabase) { }

  create(pkg){
    return this.db.list('/packages').push(pkg);
  }

  getAll(){
    return this.db.list('/packages');
  }
  get(packageId){
    return this.db.object('/packages/' + packageId);
  }

  update(packageId, pkg) {
    return this.db.object('/packages/'+ packageId).update(pkg);
  }

  delete(packageId){
    return this.db.object('/packages/' + packageId).remove();
  }

}
