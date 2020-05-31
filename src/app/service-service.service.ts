//import { Service } from './models/service';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ServiceServiceService {

  constructor(private db: AngularFireDatabase) { }

  create(ser){
    return this.db.list('/service').push(ser);
  }

  getAll(){
    return this.db.list('/service');
  }
  get(serviceId){
    return this.db.object('/service/' + serviceId);
  }

  update(serviceId, service) {
    return this.db.object('/service/'+ serviceId).update(service);
  }

  delete(serviceId){
    return this.db.object('/service/' + serviceId).remove();
  }


}
