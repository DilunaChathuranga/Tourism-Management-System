import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class EquipmentService {

  constructor(private db: AngularFireDatabase) { }

  create(equipment){
    return this.db.list('/equipments').push(equipment);
  }

  getAll() {
    return this.db.list('/equipments');
  }

  get(equipmentId){
    return this.db.object('/equipments/' + equipmentId);
  }

  update(equipmentId,equipment){
    return this.db.object('/equipments/' + equipmentId).update(equipment);
  }

  delete(equipmentId) {
    return this.db.object('/equipments/' + equipmentId).remove(); 
  }
}
