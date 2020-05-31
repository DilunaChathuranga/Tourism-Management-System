import { PackagecategoryServiceService } from './../packagecategory-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PackageService } from './../package.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-package-form',
  templateUrl: './package-form.component.html',
  styleUrls: ['./package-form.component.css']
})
export class PackageFormComponent implements OnInit {
  package = {};
  id;
  categories$;
  

  constructor(
    private router : Router,
    private packageService: PackageService,
    private categoryService: PackagecategoryServiceService, 
    private route: ActivatedRoute)
  { 
    this.categories$ = categoryService.getAll();
    

    this.id= this.route.snapshot.paramMap.get('id');
    if (this.id) this.packageService.get(this.id).take(1).subscribe(p => this.package = p); 
  }

  save(pkg){
  if (this.id) this.packageService.update(this.id, pkg);
  else this.packageService.create(pkg);

  this.router.navigate(['/package/manage']);
  }

  delete(){
    if (!confirm('Are you sure you wannt delete this package?'+this.id)) return
      
    this.packageService.delete(this.id);
    this.router.navigate(['/package/manage']);
  }

  ngOnInit() {
  }

}
