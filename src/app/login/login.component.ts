import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  state : string ='';
  error : any;

  constructor(public af: AngularFireModule, private router: Router,private auth: AuthService) { }
   /* this.af.auth.map(auth =>{
      if(auth){
        this.router.navigateByUrl('/home');
      }
    });
  }
  onSubmit(formData){
    if(formData.valid){
      console.log(formData.value);
      this.af.auth.login({
        email: formData.value.email,
        password: formData.value.password
      },
      {
        provider: formData.value.email,
        password: formData.value.password
      }).then(
        (sucess) => {
          console.log(sucess);
          this.router.navigate(['/home']);
        }).catch(
          (err) => {
            console.log(err);
            this.error = err;
          })
    }
  }*/

  ngOnInit() {
  }
  login(){
    this.auth.login();
  }

}
