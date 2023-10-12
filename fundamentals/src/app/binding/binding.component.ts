import {Component} from '@angular/core';

@Component({selector: 'app-binding', templateUrl: './binding.component.html', styleUrls: ['./binding.component.css']})
export class BindingComponent {

    isDisabled : boolean = true;
    message : string = '';
    info : string = '';

    mystyle : string = '' ;
    
    toggle(data : string) {
        this.isDisabled = this.isDisabled ? false : true;
        this.mystyle = this.isDisabled ? 'error' : 'success';
        this.message = data;
    }

}
