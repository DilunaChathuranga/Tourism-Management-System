import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'equipment-filter',
  templateUrl: './equipment-filter.component.html',
  styleUrls: ['./equipment-filter.component.css']
})
export class EquipmentFilterComponent implements OnInit {
  categories$;
  @Input('category') category;

  constructor(categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
   }

  ngOnInit() {
  }

}
