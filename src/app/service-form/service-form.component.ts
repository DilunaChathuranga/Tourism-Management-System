import { ServiceServiceService } from './../service-service.service';
import { CategoryService } from './../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
  categories$;
  service = {};
  id;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private serviceCategory: CategoryService,
    private serviceService: ServiceServiceService) 
    
    { 
      this.categories$= serviceCategory.getAll();

      this.id= this.route.snapshot.paramMap.get('id');
      if(this.id) this.serviceService.get(this.id).take(1).subscribe(s => this.service = s); 
    }

  save(service){
    if (this.id) this.serviceService.update(this.id, service);
    else this.serviceService.create(service);

    this.router.navigate(['/service/manage']);
  }

  delete(){
    if (!confirm('Are you sure you want to delete this service')) return;
      this.serviceService.delete(this.id);

      this.router.navigate(['/service/manage']);
  }


  ngOnInit() {
  }

}
