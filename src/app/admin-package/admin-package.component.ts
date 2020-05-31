import { Component, OnInit, OnDestroy } from '@angular/core';
//import { PriceService } from '../../price.service';
import { Subscription } from 'rxjs/Subscription';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-admin-package',
  templateUrl: './admin-package.component.html',
  styleUrls: ['./admin-package.component.css']
})
export class AdminPackageComponent implements OnInit, OnDestroy {
 pricess: {package: string}[];
 filteredPricess: any[];
 subscription: Subscription;
  
  constructor(private priceService: PriceService) { 
    this.subscription = this.priceService.getAll()
    .subscribe(pricess => this.filteredPricess = this.pricess = pricess);
  }

  filter(query: string) {
    this.filteredPricess = (query) ?
     this.pricess.filter(p => p.package.toLowerCase().includes(query.toLowerCase())) :
     this.pricess;
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
  
  ngOnInit() {
  }

}
