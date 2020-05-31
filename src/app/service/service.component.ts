import { CategoryService } from './../category.service';
import { ServiceServiceService } from './../service-service.service';
import { Service } from './../models/service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  service : Service[] = [];
  filteredService: Service[] = [];
  category$
  category: string;
  currentRate: 5;

  constructor(
    route: ActivatedRoute,
    serviceService : ServiceServiceService,
    categoryService: CategoryService
  ) { 

  serviceService.getAll().subscribe(ser => {
    this.service = ser;

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');

      this.filteredService = (this.category) ?
        this.service.filter(s => s.Category === this.category) :
        this.service;
    });
  });
  this.category$ = categoryService.getAll();

  
}

}
