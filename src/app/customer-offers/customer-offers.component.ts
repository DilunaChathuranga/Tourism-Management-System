import { PaymentPackageService } from './../payment-package.service';
import { Component, OnInit } from '@angular/core';
import { PackageService } from '../package.service';
import { PriceService } from '../price.service';
import { Router, ActivatedRoute  } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-customer-offers',
  templateUrl: './customer-offers.component.html',
  styleUrls: ['./customer-offers.component.css']
})
export class CustomerOffersComponent implements OnInit {
 packages$;
 price = {};
 id; 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private packageService: PaymentPackageService, 
    private priceService: PriceService) { 
    this.packages$ = packageService.getPackages();
   
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.priceService.get(this.id).take(1).subscribe(p => this.price = p);
  
  }

save(price) { 
 if (this.id) this.priceService.update(this.id, price);
 else this.priceService.create(price);
 
 this.router.navigate(['/payment/manage']);
}

delete() {
  if (!confirm('Are you sure you want to delete this package payment?')) return;
   
   this.priceService.delete(this.id);
   this.router.navigate(['/payment/manage']);
  
}

  ngOnInit() {
  }

}
