import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class BookingService {

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/Requests');
  }

  update(reqId, req) {
    return this.db.object('/Requests/'+ reqId).update(req);
  }

  delete(reqId){
    return this.db.object('/Requests/' + reqId).remove();
  }
  get(reqId){
    return this.db.object('/Requests/' + reqId);
  }

}
