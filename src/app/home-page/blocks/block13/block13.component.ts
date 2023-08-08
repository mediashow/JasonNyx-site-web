import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block13',
  templateUrl: './block13.component.html',
  styleUrls: ['./block13.component.scss']
})
export class Block13Component{
  redirectToCorporateSite() {
    window.location.href = 'https://mediashow.fr/corporate/';
  }
  
  redirectToAdvertisingPlatform() {
    window.location.href = 'https://beta1.mediashow.fr/';
  }
}
