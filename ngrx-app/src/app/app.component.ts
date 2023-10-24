import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {increment,decrement,reset} from './store/counter.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-app';
  counterValue$:Observable<number>;

  constructor(private store:Store<{counter:number}>){
    this.counterValue$=store.select('counter');
  }

  doIncrement(){
    this.store.dispatch(increment())
  }

  doDecrement(){
this.store.dispatch(decrement())
  }

  doReset(){
this.store.dispatch(reset())
  }
}
