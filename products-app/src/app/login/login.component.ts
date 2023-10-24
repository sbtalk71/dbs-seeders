import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:User=new User('','');

  constructor(private authService:AuthService,private router:Router){}

  onSubmit(){
    console.log(this.user);

    if(this.authService.login(this.user)){
      localStorage.setItem('token',this.user.email);
      this.router.navigate(['/'])
    }else{
      this.router.navigate(['login'])
    }


  }
}
