import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener} from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1000ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent{

  displayMenu: boolean = false;
  constructor() { }

  DisplayMenu():void{
    if(this.displayMenu){
      document.querySelectorAll('div.item-menu').forEach( element => {
        element.classList.remove("animate");
        setTimeout( () => element.classList.add("reverse"),50)
      })
      //setTimeout( () => this.displayMenu = !this.displayMenu, 600)
      this.displayMenu = !this.displayMenu;
    }
    else{
      this.displayMenu = !this.displayMenu;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.displayMenu){
      this.DisplayMenu();
    }
  }

  scrollTo(element: any): void {
    this.displayMenu = !this.displayMenu;
    setTimeout ( () => {
      (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 500);
  }

}
