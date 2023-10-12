import { Component } from '@angular/core';
import {interval,Observable} from 'rxjs'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  currentDate=new Date();
   car={
    name:'Hyundai',
    model:'grand i10',
    year:2017
  }

  pulseData = interval(2000);
}


