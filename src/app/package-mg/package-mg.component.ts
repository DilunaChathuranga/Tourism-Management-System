import { PackagecategoryServiceService } from './../packagecategory-service.service';
import { Package } from './../models/package';
import { ActivatedRoute } from '@angular/router';
//import { CategoryService } from './../category.service';
import { PackageService } from './../package.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-package-mg',
  templateUrl: './package-mg.component.html',
  styleUrls: ['./package-mg.component.css']
})
export class PackageMgComponent {
  package : Package[] = [];
  filteredPackage: Package[] = [];
  category$
  category: string;
  currentRate = '5';

  constructor(
    route: ActivatedRoute,
    packageService : PackageService,
    categoryService: PackagecategoryServiceService){
 
    packageService.getAll().subscribe(pkg => {
      this.package = pkg;

      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.filteredPackage = (this.category) ?
          this.package.filter(p => p.category === this.category) :
          this.package;
      });
    });
    this.category$ = categoryService.getAll();

    
  }
}


