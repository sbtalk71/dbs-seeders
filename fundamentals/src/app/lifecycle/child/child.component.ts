import { Component, Input,OnChanges,OnInit,DoCheck, ViewChild,ElementRef, ContentChild,AfterContentInit,AfterViewInit,AfterContentChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterViewInit,AfterContentChecked,OnDestroy{

  @Input() data:string;

  count:number=0;

  @ViewChild('wrapper') child:ElementRef;
  @ContentChild('contentWrapper') content:ElementRef;

  ngOnChanges(){
    console.log('ngOnChanges triggred..'+this.count++);
  }

  ngOnInit(){
    console.log('ngOnInit triggred..'+this.count++);
    console.log("View Child -- "+this.child);
    console.log("Content Child -- "+this.content);
  }
  ngDoCheck(): void {
      console.log(`ngDoCheck() triggered ${this.count++}`)
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit triggred..'+this.count++);
    console.log("View Child -- "+this.child);
    console.log("Content Child -- "+this.content);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterCViewInit triggred..'+this.count++);
    console.log("View Child -- "+this.child);
    console.log("Content Child -- "+this.content);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggred..'+this.count++);
  }
ngOnDestroy(): void {
  console.log('ngOnDestroy triggred..'+this.count++);
}
}
