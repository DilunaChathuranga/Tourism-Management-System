import { Service } from './../models/service';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceServiceService } from '../service-service.service';

@Component({
  selector: 'app-service-manage',
  templateUrl: './service-manage.component.html',
  styleUrls: ['./service-manage.component.css']
})
export class ServiceManageComponent implements OnInit , OnDestroy {
  service: Service[];
  filteredService: any[];
  subscription: Subscription;

  constructor(private serviceService: ServiceServiceService) { 
    this.subscription = this.serviceService.getAll()
    .subscribe(service => this.filteredService= this.service = service);
  }
  filter(query: string){
    this.filteredService = (query)?
      this.service.filter(p => p.Name.toLowerCase().includes(query.toLowerCase())) :
      this.service;
    
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
