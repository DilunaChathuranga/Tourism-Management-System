import { Product } from './../models/products';
import { Subscription } from 'rxjs/Subscription';
import { PackageService } from './../package.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-package-manage',
  templateUrl: './package-manage.component.html',
  styleUrls: ['./package-manage.component.css']
})
export class PackageManageComponent implements OnInit, OnDestroy {
  packages: Product[];
  filteredPackage: any[];
  subscription: Subscription;
  

  constructor(private packageService: PackageService) {
    this.subscription = this.packageService.getAll()
    .subscribe(packages => this.filteredPackage= this.packages = packages);
   }

   filter(query: string){
     this.filteredPackage = (query)?
       this.packages.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
       this.packages;
     
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
