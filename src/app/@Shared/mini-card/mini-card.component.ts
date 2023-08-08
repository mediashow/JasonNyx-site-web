import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent implements OnInit,AfterViewInit{

  constructor(private el:ElementRef){}

  @Input('text')text:string ="lol"
  @Input('icon')icon!:string;
  @Input('title')title!:string;
  //@HostBinding('class.anim') class:any = true;

  ngOnInit(): void {
    this.icon = "../../../../assets/" + this.icon;
  }

  ngAfterViewInit(): void {
    //this.class = "anim"
  }
}
