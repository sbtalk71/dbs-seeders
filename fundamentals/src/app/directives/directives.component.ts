import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  fruits:string[]=['apple','mango','orange','pear','guava'];
  selectedFruit:string='not selected';

  isAdmin:boolean=false;

  onClick(fruit:string){
    this.selectedFruit=fruit;

  }
}
