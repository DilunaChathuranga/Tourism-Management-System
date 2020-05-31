import { Component, OnInit, OnDestroy } from '@angular/core';
import { EquipmentService } from '../equipment.service';
import { Subscription } from 'rxjs/Subscription';
import { Equipment } from '../models/equipment';

@Component({
  selector: 'app-manage-equipment',
  templateUrl: './manage-equipment.component.html',
  styleUrls: ['./manage-equipment.component.css']
})
export class ManageEquipmentComponent implements OnInit, OnDestroy {

  equipments: Equipment[];
  filteredEquipments: any[];
  subscription: Subscription;

  constructor(private equipmentService: EquipmentService) { 
    this.subscription = this.equipmentService.getAll()
     .subscribe(equipments => this.filteredEquipments = this.equipments = equipments);
  }

  filter(query: string){
    this.filteredEquipments = (query) ?
      this.equipments.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) :
      this.equipments;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
