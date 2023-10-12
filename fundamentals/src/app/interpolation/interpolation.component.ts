import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  message:string="Welcome to Angular";
  isLoggedIn:boolean=true;

  getGreet():string{
    return "Hello there!";
  }
}
