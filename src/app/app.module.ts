import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { MiniCardComponent } from './@Shared/mini-card/mini-card.component';
import { NavbarComponent } from './@Shared/navbar/navbar.component';
import { BlockComponent } from './home-page/blocks/block/block.component';
import { Block1Component } from './home-page/blocks/block1/block1.component';
import { Block2Component } from './home-page/blocks/block2/block2.component';
import { SanitizeHtmlPipe } from './@Shared/htmlsecure.pipe';
import { AppearDirective } from './@Shared/appear.directive';
import { Block4Component } from './home-page/blocks/block4/block4.component';
import { MiniCardBlueComponent } from './@Shared/mini-card-blue/mini-card-blue.component';
import { Block6Component } from './home-page/blocks/block6/block6.component';
import { Block12Component } from './home-page/blocks/block12/block12.component';
import { Block8Component } from './home-page/blocks/block8/block8.component';
import { Block9Component } from './home-page/blocks/block9/block9.component';
import { Block3Component } from './home-page/blocks/block3/block3.component';
import { Block11Component } from './home-page/blocks/block11/block11.component';
import { Block13Component } from './home-page/blocks/block13/block13.component';
import { Block14Component } from './home-page/blocks/block14/block14.component';
import { Block15Component } from './home-page/blocks/block15/block15.component';

import { Block10Component } from './home-page/blocks/block10/block10.component';
import { MiniCardValeursComponent } from './@Shared/mini-card-valeurs/mini-card-valeurs.component';
import { Block7Component } from './home-page/blocks/block7/block7.component';
import { NoImgColorInverseDirective } from './@Shared/no-img-color-inverse.directive';
import { Block5Component } from './home-page/blocks/block5/block5.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Block16Component } from './home-page/blocks/block16/block16.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BlockComponent,
    Block1Component,
    NavbarComponent,
    Block2Component,
    MiniCardComponent,
    SanitizeHtmlPipe,
    AppearDirective,
    Block4Component,
    MiniCardBlueComponent,
    Block6Component,
    Block12Component,
    Block8Component,
    Block9Component,
    Block3Component,
    Block13Component,
    Block14Component,
    Block15Component,
    Block11Component,
    Block14Component,
    Block10Component,
    MiniCardValeursComponent,
    Block7Component,
    NoImgColorInverseDirective,
    Block5Component,
    Block16Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
