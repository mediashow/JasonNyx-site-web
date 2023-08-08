import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNoImgColorInverse]'
})
export class NoImgColorInverseDirective implements AfterViewInit {
  
  constructor(private el:ElementRef) {}

  ngAfterViewInit(): void {
    console.log("hello")
    this.el.nativeElement.querySelector("img").style.filter = "unset";
  }

}
