import {Component,inject,OnInit} from "@angular/core";
import { DemoService } from "../demo.service";

@Component({
    selector: 'app-greet',
     template: `<h1>{{message}}<h1>
    <p class='greet'>Welcome to the class</p>`, 
    
    styles: [`
    .greet{
        color:red;
        font-size:40px
    }`]})
export class GreetComponent implements OnInit{

    message:string='';
    
 
    constructor(private service:DemoService){
    }

    ngOnInit(): void {
        this.message=this.service.getGreetMessage();
    }
    
}
