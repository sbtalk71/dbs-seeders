import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef) {
    (this.element.nativeElement as HTMLElement).style.color='yellow';
   }


}
