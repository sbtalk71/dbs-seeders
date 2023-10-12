import {Component} from "@angular/core";

@Component({
    selector: 'app-greet',
     template: `<h1>Angular Comopnent<h1>
    <p class='greet'>Welcome to the class</p>`, 
    
    styles: [`
    .greet{
        color:red;
        font-size:40px
    }`]})
export class GreetComponent {

}
