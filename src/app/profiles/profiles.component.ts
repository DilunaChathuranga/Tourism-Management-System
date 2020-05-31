import { Employee } from './../models/employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import  'rxjs/add/operator/switchMap'
//import { EmployeeCategoriesService } from '../employee-categories.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
employees:Employee[]=[];
filteredEmployees:Employee[]=[];
categories$;
category:string;
currentRate = 5;

  constructor(
    route:ActivatedRoute,
    employeeService:EmployeeService,
    employeeCategoriesService:CategoryService,
  )

    {
    employeeService.getAll().subscribe(employees => {
    this.employees=employees;

    route.queryParamMap.subscribe(params =>{
      this.category=params.get('category');
  
      this.filteredEmployees=(this.category)?
       this.employees.filter(e => e.category == this.category):
       this.employees;
      });
    });
    
    this.categories$=employeeCategoriesService.getAll();

    
   }

  

}
