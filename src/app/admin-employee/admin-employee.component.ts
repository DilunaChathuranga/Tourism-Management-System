//import { DataTableResource } from 'angular5-data-table';
//import { EmployeeService } from './../../employee.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Employee } from '../models/employee';
import { EmployeeService } from '../employee.service';
//import { DataTableModule } from 'angular5-data-table';
//import { DataTableModule } from 'angular-4-data-table';



@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})

export class AdminEmployeeComponent implements OnInit,OnDestroy {

employees:Employee[];
//employees:{name: string}[];
  //items: Employee [] = [];
//itemCount: number;
filteredEmployees:any[];
subscription:Subscription;
//tableResource:DataTableResource<Employee>;

  constructor(private employeeService:EmployeeService) 
  {
  //this.subscription=this.emplooyeService.getAll()
  //.subscribe(employees => {
    //this.filteredEmployees= this.employees=employees;
    //this.initializeTable(employees);

    this.subscription=this.employeeService.getAll()
    .subscribe(employees => {
       this.filteredEmployees=this.employees=employees;
    });
   }

  /* private initializeTable(employees: Employee[]){
    this.tableResource=new DataTableResource(employees);
    this.tableResource.query({offset:0})
    .then(items => this.items=items);
    this.tableResource.count()
    .then(count => this.itemCount=count)
   }
*/
  /* reloadItems(params){
if(!this.tableResource) return ;

    this.tableResource.query(params)
    .then(items => this.items=items);
   }
*/
filter(query:string){
this.filteredEmployees =(query) ?
this.employees.filter(e => e.name.toLowerCase().includes(query.toLowerCase())):
this.employees;
}

  ngOnDestroy(){
this.subscription.unsubscribe(); 
  }

  ngOnInit() {
  }

}
