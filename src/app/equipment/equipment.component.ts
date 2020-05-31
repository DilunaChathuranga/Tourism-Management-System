import { OfferCategoryService } from './../offer-category.service';
import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from '../models/equipment';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent {
  equipments: Equipment[] = [];
  filteredEquipments: Equipment[] = [];
  category: string;
  category$

  constructor(
    route: ActivatedRoute,
    equipmentService: EquipmentService,
    offerCategory: OfferCategoryService,
    ) {

    equipmentService.getAll().subscribe(equipments => {
      this.equipments=equipments;

      //return route.queryParamMap;
    //})  
    route.queryParamMap.subscribe(params =>{
        this.category = params.get('category');
  
        this.filteredEquipments = (this.category) ?
          this.equipments.filter(e => e.category === this.category):
          this.equipments;
      });
    });

      this.category$=offerCategory. getEqui();
    
   }

}
