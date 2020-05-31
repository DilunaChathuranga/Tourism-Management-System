import { BookingService } from './../booking.service';
import { Booking } from './../models/bookingnow';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent  {
  booking : Booking[] = [];
  id;

  constructor(private bookingService: BookingService, private router : Router, private route: ActivatedRoute) 
  {
    bookingService.getAll().subscribe(ser => {
      this.booking = ser;
    });

    this.id= this.route.snapshot.paramMap.get('id');
    if (this.id) this.bookingService.get(this.id).take(1).subscribe(p => this.booking = p); 
  }

delete(){
  if (!confirm('Are you sure you wannt delete this Booking?'+this.id)) return
    
  this.bookingService.delete(this.id);
  this.router.navigate(['/booking']);
}

}
