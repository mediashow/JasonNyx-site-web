import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-card-valeurs',
  templateUrl: './mini-card-valeurs.component.html',
  styleUrls: ['./mini-card-valeurs.component.scss']
})
export class MiniCardValeursComponent implements OnInit {

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
