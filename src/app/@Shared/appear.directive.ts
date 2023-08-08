import { Directive, AfterViewInit, OnDestroy, Output, EventEmitter, ElementRef, Input } from "@angular/core";
import { Subscription, fromEvent, startWith } from "rxjs";


@Directive({
  selector: '[appear]'
})
export class AppearDirective implements AfterViewInit, OnDestroy {
  @Output()
  appear: EventEmitter<void>;
  @Input('appear')class:string = "";
  elementPos!: number;
  elementHeight!: number;

  scrollPos!: number;
  windowHeight!: number;

  subscriptionScroll!: Subscription;
  subscriptionResize!: Subscription;

  constructor(private element: ElementRef){
    this.appear = new EventEmitter<void>();
  }

  saveDimensions() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.offsetHeight;
    this.windowHeight = window.innerHeight;
  }
  saveScrollPos() {
    this.scrollPos = window.scrollY;
  }
  getOffsetTop(element: any){
    let offsetTop = element.offsetTop || 0;
    if(element.offsetParent){
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }
  checkVisibility(){
    if(this.isVisible()){
      // double check dimensions (due to async loaded contents, e.g. images)
      this.saveDimensions();
      if(this.isVisible()){
        this.unsubscribe();
        if (!window.matchMedia("(min-width: 576px)").matches){
          this.element.nativeElement.classList.add(this.class)
        }
      }
    }
  }
  isVisible(){
    return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
  }

  subscribe(){
    this.subscriptionScroll = fromEvent(window, 'scroll').pipe(startWith(null))
      .subscribe(() => {
        this.saveScrollPos();
        this.checkVisibility();
      });
    this.subscriptionResize = fromEvent(window, 'resize').pipe(startWith(null))
      .subscribe(() => {
        this.saveDimensions();
        this.checkVisibility();
      });
  }
  unsubscribe(){
    if(this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
    if(this.subscriptionResize){
      this.subscriptionResize.unsubscribe();
    }
  }

  ngAfterViewInit(){
    this.subscribe();
  }
  ngOnDestroy(){
    this.unsubscribe();
  }
}