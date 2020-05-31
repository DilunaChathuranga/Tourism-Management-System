//import { CategoryService } from './../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { CategoryService } from '../category.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
//import { EmployeeCategoriesService } from '../employee-categories.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
employee ={};
cate$;
id;
  constructor(
    private router: Router,
    private route :ActivatedRoute,
    employeeCategoriesService: CategoryService,
    private employeeService:EmployeeService) {
    this.cate$= employeeCategoriesService.getAll();

    this.id =this.route.snapshot.paramMap.get('id');
    if (this.id) this.employeeService.get(this.id).take(1).subscribe(e => this.employee  =e);
   }

   save(employee){
    if(this.id) this.employeeService.update(this.id,employee);
    else this.employeeService.create(employee);

   this.router.navigate(['/profiles/manage']);
   }

   delete(){
     if(!confirm('Are you sure you want to delete this Employee ?')) return
      this.employeeService.delete(this.id);

      this.router.navigate(['/profiles/manage']);
     }
   

  ngOnInit() {
  }

}
