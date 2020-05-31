import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageUrls = [
    { url: 'https://firebasestorage.googleapis.com/v0/b/visitlk-121fe.appspot.com/o/images%2Fhomebackground%2Fpexels-photo-307008.jpeg?alt=media&token=738e2d4e-cf2b-433a-950b-5e6c8687e223'},
    { url: 'https://firebasestorage.googleapis.com/v0/b/visitlk-121fe.appspot.com/o/images%2Fhomebackground%2Fpexels-photo-372098.jpeg?alt=media&token=bac13f39-f48d-43e9-a36f-a4f4a32114f2'},
    { url: 'https://firebasestorage.googleapis.com/v0/b/visitlk-121fe.appspot.com/o/images%2Fhomebackground%2Fpexels-photo-450441.jpeg?alt=media&token=3d93f7da-f726-43d3-bde4-47a934e25d1f'},
    'https://firebasestorage.googleapis.com/v0/b/visitlk-121fe.appspot.com/o/images%2Fhomebackground%2Fpexels-photo-672358.jpeg?alt=media&token=8ca1e7df-8d1e-4ada-a9d0-a760b7984469'
  ];
  height: string = '100vh';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';
  
  constructor(private auth: AuthService) { }
  ngOnInit() {
    // adding an image url dynamically.
    setTimeout(() => {
      this.imageUrls.push('https://firebasestorage.googleapis.com/v0/b/visitlk-121fe.appspot.com/o/images%2Fhomebackground%2Fpexels-photo-915972.jpeg?alt=media&token=9ba6577e-8c95-4fc6-a6f3-57396e4eb0af');
  },2000);}

  login(){
    this.auth.login();
  }

}

