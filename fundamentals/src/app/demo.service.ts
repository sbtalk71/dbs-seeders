import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }


  getGreetMessage(){
    return "Hello from Service";
  }
}
