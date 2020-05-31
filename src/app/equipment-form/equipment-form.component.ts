import { EqCateServiceService } from './../eq-cate-service.service';
import { Component, OnInit } from '@angular/core';
//import { CategoryService } from '../category.service';
import { EquipmentService } from '../equipment.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  categories$;
  equipment = {};
  id;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private categoryService: EqCateServiceService, 
    private equipmentService: EquipmentService) 
  {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.equipmentService.get(this.id).take(1).subscribe(e => this.equipment = e);
   }

  save(equipment){
    if (this.id) this.equipmentService.update(this.id, equipment);
    else this.equipmentService.create(equipment);

    this.router.navigate(['/equipment/manage']);
  }

  delete(){
    if (!confirm('Are you sure you want to delete this equipment')) return;
      this.equipmentService.delete(this.id);

      this.router.navigate(['/equipment/manage']);
  }

  ngOnInit() {
  }

}
