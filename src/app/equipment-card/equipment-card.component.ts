import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from '../models/equipment';

@Component({
  selector: 'equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.css']
})
export class EquipmentCardComponent {
  @Input('equipment') equipment: Equipment;
  @Input('show-actions') showActions = true;

  constructor() { }

}
