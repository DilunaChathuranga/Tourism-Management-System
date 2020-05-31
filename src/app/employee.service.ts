import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor(private db:AngularFireDatabase) { }

  create(employee){
    return this.db.list('/employees').push(employee);
  }
  getAll(){
    return this.db.list('/employees');
  }

  get(employeeId){
    return this.db.object('/employees/'+employeeId);
  }
  
  update(employeeId, employee){
  return this.db.object('/employees/'+employeeId).update(employee);
  }

  delete(employeeId){
    return this.db.object('/employees/'+ employeeId).remove(); 
  }
}
